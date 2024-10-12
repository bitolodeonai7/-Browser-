import React from 'react';
import { Home, Bookmark, Clock, Settings } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg">
      <ul className="flex justify-around items-center h-16">
        <li>
          <a href="#" className="flex flex-col items-center text-blue-400 hover:text-blue-300">
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-blue-400 hover:text-blue-300">
            <Bookmark size={24} />
            <span className="text-xs mt-1">Bookmarks</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-blue-400 hover:text-blue-300">
            <Clock size={24} />
            <span className="text-xs mt-1">History</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-blue-400 hover:text-blue-300">
            <Settings size={24} />
            <span className="text-xs mt-1">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;