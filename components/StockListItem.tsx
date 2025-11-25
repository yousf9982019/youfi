
import React from 'react';
import { StockData } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockListItemProps {
  stock: StockData;
  onClick?: () => void;
}

const StockListItem: React.FC<StockListItemProps> = ({ stock, onClick }) => {
  const isPositive = stock.change >= 0;
  const colorClass = isPositive ? 'text-trade-up' : 'text-trade-down';
  const bgClass = isPositive ? 'bg-trade-up/10' : 'bg-trade-down/10';

  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between py-4 border-b border-gray-800 active:bg-gray-900 transition-colors cursor-pointer"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
            <span className="font-bold text-base text-white">{stock.symbol}</span>
            <div className={`text-[10px] px-1 rounded ${stock.type === 'us' ? 'bg-blue-500/20 text-blue-400' : stock.type === 'hk' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {stock.type.toUpperCase()}
            </div>
        </div>
        <span className="text-sm text-gray-500">{stock.name}</span>
      </div>
      
      {/* Simple Sparkline Placeholder or Mini Chart */}
      <div className="hidden sm:flex w-24 h-8 items-center justify-center opacity-50">
         {isPositive ? <TrendingUp size={20} className={colorClass}/> : <TrendingDown size={20} className={colorClass} />}
      </div>

      <div className="flex flex-col items-end min-w-[80px]">
        <span className={`text-base font-semibold ${colorClass}`}>
          {stock.price.toFixed(2)}
        </span>
        <div className={`px-2 py-0.5 rounded flex justify-end min-w-[70px] ${isPositive ? 'bg-trade-up' : 'bg-trade-down'}`}>
             <span className="text-xs font-bold text-white">
                {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
             </span>
        </div>
      </div>
    </div>
  );
};

export default StockListItem;
