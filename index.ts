export interface FileData {
  columns: string[];
  data: Record<string, string>[];
}

export interface SearchQuery {
  primaryColumn: string;
  prompt: string;
}

export interface SearchResult {
  entity: string;
  extractedData: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  timestamp: string;
}