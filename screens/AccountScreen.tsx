import React from 'react';
import { Eye, History, CreditCard, Shield } from 'lucide-react';

const AccountScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white px-4 pt-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">账户</h1>
        <History className="text-gray-400" />
      </div>

      {/* Total Assets Card */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-6 rounded-2xl shadow-lg border border-blue-800/30 mb-6">
        <div className="flex items-center gap-2 mb-2 text-blue-200">
            <span className="text-sm">总资产 (USD)</span>
            <Eye size={16} />
        </div>
        <div className="text-4xl font-bold mb-4 tracking-tight">
            $124,592.34
        </div>
        <div className="flex gap-8">
            <div className="flex flex-col">
                <span className="text-xs text-blue-200 mb-1">今日盈亏</span>
                <span className="text-lg font-semibold text-trade-up">+$1,230.50</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-blue-200 mb-1">持仓盈亏</span>
                <span className="text-lg font-semibold text-trade-up">+$14,500.00</span>
            </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col items-center gap-2 bg-gray-900 p-4 rounded-xl">
            <CreditCard className="text-blue-400" />
            <span className="text-xs">入金</span>
        </div>
         <div className="flex flex-col items-center gap-2 bg-gray-900 p-4 rounded-xl">
            <CreditCard className="text-orange-400" />
            <span className="text-xs">出金</span>
        </div>
         <div className="flex flex-col items-center gap-2 bg-gray-900 p-4 rounded-xl">
            <Shield className="text-green-400" />
            <span className="text-xs">风控</span>
        </div>
         <div className="flex flex-col items-center gap-2 bg-gray-900 p-4 rounded-xl">
            <History className="text-purple-400" />
            <span className="text-xs">订单</span>
        </div>
      </div>

      {/* Holdings Preview (Static) */}
      <h2 className="text-lg font-bold mb-4">资产分布</h2>
      <div className="bg-gray-900 rounded-xl p-6 flex justify-center items-center h-40 border border-gray-800">
          <span className="text-gray-500 text-sm">暂无图表数据</span>
      </div>

    </div>
  );
};

export default AccountScreen;