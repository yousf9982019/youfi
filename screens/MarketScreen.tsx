import React from 'react';
import MarketIndexCard from '../components/MarketIndexCard';
import { GAINERS_RANKING, LOSERS_RANKING } from '../data';
import { ChevronRight, Layers, Zap, Clock } from 'lucide-react';

const MarketScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white overflow-y-auto pb-24 no-scrollbar">
      {/* Header */}
      <div className="pt-12 px-4 pb-4 sticky top-0 z-40 bg-black/90 backdrop-blur-md">
         <h1 className="text-2xl font-bold">市场</h1>
      </div>

      {/* Indices Scroller */}
      <div className="px-4 mb-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x">
            <MarketIndexCard name="S&P 500" value="5,234.12" change={24.50} changePercent={0.47} />
            <MarketIndexCard name="Nasdaq" value="16,399.80" change={-45.20} changePercent={-0.28} />
            <MarketIndexCard name="Dow Jones" value="39,120.50" change={120.10} changePercent={0.31} />
            <MarketIndexCard name="Hang Seng" value="16,543.20" change={-120.3} changePercent={-0.72} />
        </div>
      </div>

      {/* Market Features Grid */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-4 gap-4">
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <Layers size={24} />
                </div>
                <span className="text-xs text-gray-400">板块</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-500">
                    <Zap size={24} />
                </div>
                <span className="text-xs text-gray-400">异动</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-orange-600/20 flex items-center justify-center text-orange-500">
                    <Clock size={24} />
                </div>
                <span className="text-xs text-gray-400">盘前</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-green-600/20 flex items-center justify-center text-green-500">
                    <Layers size={24} />
                </div>
                <span className="text-xs text-gray-400">ETF</span>
             </div>
        </div>
      </div>

      {/* Rankings Section - Gainers */}
      <div className="mb-6">
        <div className="flex justify-between items-center px-4 mb-3">
            <h2 className="text-lg font-bold">涨幅榜</h2>
            <div className="flex items-center text-gray-500 text-sm">
                <span>更多</span>
                <ChevronRight size={16} />
            </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm mx-4 rounded-xl overflow-hidden">
            {GAINERS_RANKING.map((item, index) => (
                <div key={item.symbol} className="flex items-center justify-between p-4 border-b border-gray-800 last:border-0">
                    <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold w-4 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-700' : 'text-gray-600'}`}>{item.rank}</span>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">{item.symbol}</span>
                            <span className="text-xs text-gray-500">{item.name}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                         <span className="text-sm font-medium">{item.value}</span>
                         <span className="text-trade-up text-xs font-bold">+{item.changePercent}%</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Rankings Section - Losers */}
      <div className="mb-6">
        <div className="flex justify-between items-center px-4 mb-3">
            <h2 className="text-lg font-bold">跌幅榜</h2>
            <div className="flex items-center text-gray-500 text-sm">
                <span>更多</span>
                <ChevronRight size={16} />
            </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm mx-4 rounded-xl overflow-hidden">
            {LOSERS_RANKING.map((item, index) => (
                <div key={item.symbol} className="flex items-center justify-between p-4 border-b border-gray-800 last:border-0">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-600 w-4">{item.rank}</span>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">{item.symbol}</span>
                            <span className="text-xs text-gray-500">{item.name}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                         <span className="text-sm font-medium">{item.value}</span>
                         <span className="text-trade-down text-xs font-bold">{item.changePercent}%</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarketScreen;