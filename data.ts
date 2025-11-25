import { StockData, RankingItem } from './types';

export const MOCK_STOCKS: StockData[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.45, change: 2.34, changePercent: 1.25, type: 'us', isPosition: true, chartData: [180, 182, 181, 185, 184, 189] },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 245.60, change: -5.20, changePercent: -2.07, type: 'us', isPosition: true, chartData: [255, 250, 248, 246, 245] },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 890.12, change: 15.40, changePercent: 1.76, type: 'us', isPosition: false, chartData: [850, 860, 875, 880, 890] },
  { symbol: 'BABA', name: 'Alibaba Group', price: 75.30, change: 0.50, changePercent: 0.67, type: 'us', isPosition: false, chartData: [74, 73, 75, 75.3] },
  { symbol: '00700', name: 'Tencent', price: 298.40, change: -1.20, changePercent: -0.40, type: 'hk', isPosition: true, chartData: [300, 299, 298, 298.4] },
  { symbol: '03690', name: 'Meituan', price: 85.10, change: -3.40, changePercent: -3.84, type: 'hk', isPosition: false },
  { symbol: '00005', name: 'HSBC Holdings', price: 62.50, change: 0.15, changePercent: 0.24, type: 'hk', isPosition: false },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: 65432.10, change: 1200.00, changePercent: 1.87, type: 'crypto', isPosition: false },
  { symbol: 'TSLA 240621 C 250', name: 'TSLA Call 250', price: 12.50, change: -1.50, changePercent: -10.71, type: 'option', isPosition: false },
  { symbol: 'AAPL 240621 P 180', name: 'AAPL Put 180', price: 2.30, change: 0.10, changePercent: 4.55, type: 'option', isPosition: true },
];

export const GAINERS_RANKING: RankingItem[] = [
  { rank: 1, symbol: 'GME', name: 'GameStop', value: 45.30, changePercent: 25.4 },
  { rank: 2, symbol: 'AMC', name: 'AMC Ent.', value: 5.12, changePercent: 12.1 },
  { rank: 3, symbol: 'PLTR', name: 'Palantir', value: 24.50, changePercent: 8.5 },
];

export const LOSERS_RANKING: RankingItem[] = [
  { rank: 1, symbol: 'MARA', name: 'Marathon Digital', value: 19.20, changePercent: -8.4 },
  { rank: 2, symbol: 'COIN', name: 'Coinbase', value: 220.10, changePercent: -5.1 },
  { rank: 3, symbol: 'RIVN', name: 'Rivian', value: 10.45, changePercent: -4.2 },
];