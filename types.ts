export enum MainTab {
  Watchlist = 'WATCHLIST',
  Market = 'MARKET',
  Account = 'ACCOUNT',
  Me = 'ME'
}

export enum WatchlistCategory {
  All = 'All',
  Positions = 'Positions',
  US = 'US',
  HK = 'HK',
  Options = 'Options'
}

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: string;
  marketCap?: string;
  type: 'us' | 'hk' | 'crypto' | 'option';
  isPosition: boolean;
  chartData?: number[]; // Simple array for sparkline
}

export interface RankingItem {
  rank: number;
  symbol: string;
  name: string;
  value: string | number; // Price or Turnover
  changePercent: number;
}