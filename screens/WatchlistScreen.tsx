
import React, { useState } from 'react';
import { WatchlistCategory, StockData } from '../types';
import { MOCK_STOCKS } from '../data';
import StockListItem from '../components/StockListItem';
import { Search, ListFilter, Plus } from 'lucide-react';

interface WatchlistScreenProps {
  onStockClick: (stock: StockData) => void;
}

const WatchlistScreen: React.FC<WatchlistScreenProps> = ({ onStockClick }) => {
  const [activeCategory, setActiveCategory] = useState<WatchlistCategory>(WatchlistCategory.All);

  const categories = Object.values(WatchlistCategory);

  const filteredStocks = MOCK_STOCKS.filter((stock) => {
    switch (activeCategory) {
      case WatchlistCategory.All: return true;
      case WatchlistCategory.Positions: return stock.isPosition;
      case WatchlistCategory.US: return stock.type === 'us';
      case WatchlistCategory.HK: return stock.type === 'hk';
      case WatchlistCategory.Options: return stock.type === 'option';
      default: return true;
    }
  });

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Top Header Area */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md pt-12 pb-2 px-4 border-b border-gray-800">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">自选</h1>
            <div className="flex gap-4 text-gray-400">
                <Search size={22} className="cursor-pointer hover:text-white" />
                <Plus size={22} className="cursor-pointer hover:text-white" />
            </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${
                        activeCategory === cat 
                        ? 'text-white border-blue-500' 
                        : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                    {activeCategory === cat && cat === WatchlistCategory.All ? '全部' : 
                     activeCategory === cat && cat === WatchlistCategory.Positions ? '持仓' :
                     activeCategory === cat && cat === WatchlistCategory.US ? '美股' :
                     activeCategory === cat && cat === WatchlistCategory.HK ? '港股' :
                     activeCategory === cat && cat === WatchlistCategory.Options ? '期权' :
                     // Fallback for logic consistency
                     cat === WatchlistCategory.All ? '全部' : 
                     cat === WatchlistCategory.Positions ? '持仓' :
                     cat === WatchlistCategory.US ? '美股' :
                     cat === WatchlistCategory.HK ? '港股' : '期权'
                    }
                </button>
            ))}
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 no-scrollbar">
        {/* Sub-header for sorting/grouping */}
        <div className="flex justify-between items-center py-2 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-1">
                <span>名称代码</span>
                <ListFilter size={12} />
            </div>
            <div className="flex gap-8">
                <span>最新价</span>
                <span>涨跌幅</span>
            </div>
        </div>

        {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
                <StockListItem 
                    key={stock.symbol} 
                    stock={stock} 
                    onClick={() => onStockClick(stock)}
                />
            ))
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-600">
                <p>暂无自选股票</p>
                <button className="mt-4 px-4 py-2 bg-gray-800 rounded-full text-sm text-blue-400">
                    添加股票
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistScreen;
