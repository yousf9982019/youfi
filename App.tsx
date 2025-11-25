
import React, { useState } from 'react';
import { MainTab, StockData } from './types';
import TabBar from './components/TabBar';
import WatchlistScreen from './screens/WatchlistScreen';
import MarketScreen from './screens/MarketScreen';
import AccountScreen from './screens/AccountScreen';
import MeScreen from './screens/MeScreen';
import StockDetailScreen from './screens/StockDetailScreen';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>(MainTab.Watchlist);
  const [selectedStock, setSelectedStock] = useState<StockData | null>(null);

  const handleStockClick = (stock: StockData) => {
    setSelectedStock(stock);
  };

  const handleBackFromDetail = () => {
    setSelectedStock(null);
  };

  const renderScreen = () => {
    switch (currentTab) {
      case MainTab.Watchlist:
        return <WatchlistScreen onStockClick={handleStockClick} />;
      case MainTab.Market:
        return <MarketScreen />;
      case MainTab.Account:
        return <AccountScreen />;
      case MainTab.Me:
        return <MeScreen />;
      default:
        return <WatchlistScreen onStockClick={handleStockClick} />;
    }
  };

  return (
    <div className="w-full h-screen bg-black text-white font-sans overflow-hidden flex flex-col">
      <div className="flex-1 w-full h-full overflow-hidden relative">
        {selectedStock ? (
            <StockDetailScreen stock={selectedStock} onBack={handleBackFromDetail} />
        ) : (
            renderScreen()
        )}
      </div>
      {/* Hide TabBar when in detail view */}
      {!selectedStock && <TabBar currentTab={currentTab} onTabChange={setCurrentTab} />}
    </div>
  );
};

export default App;
