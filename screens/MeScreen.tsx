import React from 'react';
import { Settings, Bell, ChevronRight, HelpCircle, LogOut } from 'lucide-react';

const MeScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white pt-12">
        {/* Profile Header */}
        <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xl font-bold">
                JD
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">John Doe</h1>
                <span className="text-gray-400 text-sm">UID: 8829103</span>
            </div>
        </div>

        {/* Menu Items */}
        <div className="px-4">
            <div className="bg-gray-900 rounded-xl overflow-hidden mb-4">
                <MenuItem icon={Bell} label="消息通知" hasBadge />
                <MenuItem icon={Settings} label="通用设置" />
                <MenuItem icon={HelpCircle} label="帮助与客服" />
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden">
                <MenuItem icon={LogOut} label="退出登录" className="text-red-500" hideChevron />
            </div>
        </div>
    </div>
  );
};

interface MenuItemProps {
    icon: React.ElementType;
    label: string;
    hasBadge?: boolean;
    hideChevron?: boolean;
    className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, hasBadge, hideChevron, className }) => (
    <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer border-b border-gray-800 last:border-0">
        <div className="flex items-center gap-3">
            <Icon size={20} className={className || "text-gray-400"} />
            <span className={`text-sm font-medium ${className}`}>{label}</span>
        </div>
        <div className="flex items-center gap-2">
            {hasBadge && <div className="w-2 h-2 rounded-full bg-red-500"></div>}
            {!hideChevron && <ChevronRight size={16} className="text-gray-600" />}
        </div>
    </div>
);

export default MeScreen;