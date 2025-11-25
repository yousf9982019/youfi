import React from 'react';

interface MarketIndexCardProps {
  name: string;
  value: string;
  change: number;
  changePercent: number;
}

const MarketIndexCard: React.FC<MarketIndexCardProps> = ({ name, value, change, changePercent }) => {
    const isUp = change >= 0;
    return (
        <div className="flex-shrink-0 w-32 p-3 bg-gray-900 rounded-xl border border-gray-800 flex flex-col justify-between h-24 snap-start">
            <span className="text-xs font-semibold text-gray-400">{name}</span>
            <div className="flex flex-col">
                <span className={`text-lg font-bold ${isUp ? 'text-trade-up' : 'text-trade-down'}`}>
                    {value}
                </span>
                <div className="flex items-center gap-1">
                    <span className={`text-xs ${isUp ? 'text-trade-up' : 'text-trade-down'}`}>
                        {isUp ? '+' : ''}{change}
                    </span>
                    <span className={`text-xs ${isUp ? 'text-trade-up' : 'text-trade-down'}`}>
                         ({isUp ? '+' : ''}{changePercent}%)
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MarketIndexCard;