import React, { useState } from 'react';
import { Bot, Database } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { QueryBuilder } from './components/QueryBuilder';
import { ResultsTable } from './components/ResultsTable';
import type { FileData, SearchResult } from './types';

function App() {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleFileSelect = async (file: File) => {
    // In a real app, process CSV file here
    const mockData: FileData = {
      columns: ['company', 'industry', 'location'],
      data: [
        { company: 'Acme Corp', industry: 'Technology', location: 'New York' },
        { company: 'Globex Inc', industry: 'Manufacturing', location: 'Chicago' },
      ],
    };
    setFileData(mockData);
  };

  const handleQuerySubmit = ({ primaryColumn, prompt }: { primaryColumn: string; prompt: string }) => {
    // In a real app, start the search process here
    const newResults: SearchResult[] = fileData!.data.map((row) => ({
      entity: row[primaryColumn],
      extractedData: '',
      status: 'pending',
      timestamp: new Date().toISOString(),
    }));
    setResults(newResults);

    // Simulate processing
    newResults.forEach((result, index) => {
      setTimeout(() => {
        setResults((prev) => 
          prev.map((r, i) => 
            i === index
              ? { ...r, status: 'completed', extractedData: `Mock data for ${r.entity}` }
              : r
          )
        );
      }, (index + 1) * 2000);
    });
  };

  const handleDownload = () => {
    // In a real app, generate and download CSV here
    console.log('Downloading results...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-12 h-12 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-900">AI Agent Dashboard</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload your data, define your search parameters, and let our AI agent retrieve the information you need.
          </p>
        </header>

        <main className="space-y-8">
          {!fileData ? (
            <FileUpload onFileSelect={handleFileSelect} />
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <Database className="w-5 h-5" />
                  Configure Search
                </div>
                <QueryBuilder
                  columns={fileData.columns}
                  onQuerySubmit={handleQuerySubmit}
                />
              </div>
              <div className="space-y-4">
                <ResultsTable
                  results={results}
                  onDownload={handleDownload}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;