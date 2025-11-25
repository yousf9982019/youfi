import React from 'react';
import { Star, BarChart2, Wallet, User } from 'lucide-react';
import { MainTab } from '../types';

interface TabBarProps {
  currentTab: MainTab;
  onTabChange: (tab: MainTab) => void;
}

const TabBar: React.FC<TabBarProps> = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: MainTab.Watchlist, label: '自选', icon: Star },
    { id: MainTab.Market, label: '市场', icon: BarChart2 },
    { id: MainTab.Account, label: '账户', icon: Wallet },
    { id: MainTab.Me, label: '我的', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-panel pb-6 pt-3 px-6">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-200 ${
                isActive ? 'text-blue-500 scale-105' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} fill={isActive && tab.id === MainTab.Watchlist ? "currentColor" : "none"} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;