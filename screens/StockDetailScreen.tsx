
import React, { useState } from 'react';
import { ArrowLeft, Bell, Star, Share2, TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';
import { StockData } from '../types';

interface StockDetailScreenProps {
  stock: StockData;
  onBack: () => void;
}

const TimeFrameTab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
      active ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    {label}
  </button>
);

const StatRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
    <span className="text-gray-500 text-xs">{label}</span>
    <span className="text-white text-sm font-medium">{value}</span>
  </div>
);

const StockDetailScreen: React.FC<StockDetailScreenProps> = ({ stock, onBack }) => {
  const [timeFrame, setTimeFrame] = useState('1D');
  const isPositive = stock.change >= 0;
  const colorClass = isPositive ? 'text-trade-up' : 'text-trade-down';
  const bgColorClass = isPositive ? 'bg-trade-up' : 'bg-trade-down';

  // Mock chart generation
  const generateChartPath = () => {
    // Generate a jagged line resembling a stock chart
    let points = "0,100 ";
    let prevY = 100;
    const steps = 40;
    for (let i = 1; i <= steps; i++) {
        const x = (i / steps) * 400;
        const trend = isPositive ? -2 : 2; // Slight bias based on stock performance
        const noise = (Math.random() - 0.5) * 30;
        let y = prevY + trend + noise;
        y = Math.max(10, Math.min(190, y)); // Clamp
        points += `${x},${y} `;
        prevY = y;
    }
    return points;
  };

  const chartPath = React.useMemo(() => generateChartPath(), [stock.symbol]);

  // Derived mock stats
  const openPrice = (stock.price * (1 - stock.changePercent / 1000)).toFixed(2);
  const highPrice = (stock.price * 1.02).toFixed(2);
  const lowPrice = (stock.price * 0.98).toFixed(2);
  const marketCap = stock.type === 'crypto' ? '1.2T' : stock.type === 'hk' ? '3.5T' : '2.4T';
  const peRatio = stock.type === 'crypto' ? '-' : '24.5';
  const volume = '45.2M';

  return (
    <div className="flex flex-col h-full bg-black text-white relative z-50 animate-in fade-in slide-in-from-right-10 duration-300">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md pt-12 pb-2 px-4 flex justify-between items-center border-b border-gray-800">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
            <span className="font-bold text-base">{stock.symbol}</span>
            <span className="text-xs text-gray-500">{stock.name}</span>
        </div>
        <div className="flex gap-4 text-gray-400">
            <Star size={22} className={stock.isPosition ? "text-yellow-500 fill-yellow-500" : ""} />
            <Share2 size={22} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Price Section */}
        <div className="px-6 py-6 text-center">
            <h1 className={`text-4xl font-bold mb-2 ${colorClass}`}>
                {stock.price.toFixed(2)}
            </h1>
            <div className="flex items-center justify-center gap-2">
                <span className={`flex items-center text-sm font-medium ${colorClass}`}>
                   {isPositive ? <TrendingUp size={16} className="mr-1"/> : <TrendingDown size={16} className="mr-1"/>}
                   {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} 
                </span>
                <span className={`text-sm font-medium ${colorClass}`}>
                   ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                </span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
                 <div className="flex items-center gap-1">
                     <div className={`w-1.5 h-1.5 rounded-full ${isPositive ? 'bg-trade-up' : 'bg-trade-down'} animate-pulse`}></div>
                     <span>交易中</span>
                 </div>
                 <span>USD • {new Date().toLocaleTimeString()}</span>
            </div>
        </div>

        {/* Time Frames */}
        <div className="flex justify-between px-6 mb-6">
            {['1D', '5D', '1M', '3M', 'YTD', '1Y'].map((t) => (
                <TimeFrameTab key={t} label={t} active={timeFrame === t} onClick={() => setTimeFrame(t)} />
            ))}
        </div>

        {/* Chart Area */}
        <div className="h-64 w-full mb-8 relative px-4">
             <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                 <defs>
                     <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor={isPositive ? '#00C087' : '#FF3B30'} stopOpacity="0.2" />
                         <stop offset="100%" stopColor={isPositive ? '#00C087' : '#FF3B30'} stopOpacity="0" />
                     </linearGradient>
                 </defs>
                 {/* Fill Area (Simulated by closing the path) */}
                 <path d={`${chartPath} L 400,200 L 0,200 Z`} fill="url(#gradientArea)" />
                 {/* Stroke Line */}
                 <path d={chartPath} fill="none" stroke={isPositive ? '#00C087' : '#FF3B30'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 
                 {/* Dotted cursor line (Static simulation) */}
                 <line x1="200" y1="0" x2="200" y2="200" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                 <circle cx="200" cy="100" r="4" fill="white" />
             </svg>
        </div>

        {/* Stats Grid */}
        <div className="px-6 mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">关键数据</h3>
                <MoreHorizontal size={20} className="text-gray-500" />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <StatRow label="开盘" value={openPrice} />
                <StatRow label="最高" value={highPrice} />
                <StatRow label="最低" value={lowPrice} />
                <StatRow label="成交量" value={volume} />
                <StatRow label="市盈率(TTM)" value={peRatio} />
                <StatRow label="总市值" value={marketCap} />
                <StatRow label="52周最高" value={(stock.price * 1.1).toFixed(2)} />
                <StatRow label="52周最低" value={(stock.price * 0.8).toFixed(2)} />
            </div>
        </div>
        
        {/* News Placeholder */}
        <div className="px-6 pb-8">
            <h3 className="font-bold text-lg mb-4">相关新闻</h3>
            <div className="space-y-4">
                {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 border-b border-gray-800 pb-4 last:border-0">
                        <div className="flex-1">
                            <h4 className="text-sm font-medium leading-snug mb-2 text-gray-200">
                                Market analysis shows strong momentum for {stock.symbol} ahead of earnings report.
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Wall St Journal</span>
                                <span>•</span>
                                <span>2h ago</span>
                            </div>
                        </div>
                        <div className="w-20 h-14 bg-gray-800 rounded md:block hidden"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800 px-6 py-4 pb-8 flex gap-4 z-50">
           <div className="flex flex-col items-center justify-center text-gray-400 gap-1 px-2">
               <Bell size={20} />
               <span className="text-[10px]">提醒</span>
           </div>
           <button className={`flex-1 rounded-lg font-bold text-white py-3 bg-trade-up`}>
               买入
           </button>
           <button className={`flex-1 rounded-lg font-bold text-white py-3 bg-trade-down`}>
               卖出
           </button>
      </div>
    </div>
  );
};

export default StockDetailScreen;
