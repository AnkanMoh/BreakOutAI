import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

interface QueryBuilderProps {
  columns: string[];
  onQuerySubmit: (query: { primaryColumn: string; prompt: string }) => void;
}

export function QueryBuilder({ columns, onQuerySubmit }: QueryBuilderProps) {
  const [primaryColumn, setPrimaryColumn] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuerySubmit({ primaryColumn, prompt });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Select Primary Column
        </label>
        <select
          value={primaryColumn}
          onChange={(e) => setPrimaryColumn(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select a column...</option>
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Search Prompt
        </label>
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Find the email address of {company}"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <div className="absolute right-3 top-2.5 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          Use {'{entity}'} as a placeholder for each row value
        </p>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        <Search className="w-5 h-5" />
        Start Search
      </button>
    </form>
  );
}