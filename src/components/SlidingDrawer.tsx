import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const SlidingDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-20 bg-blue-600 text-white p-2 rounded-full glow-effect"
      >
        <Menu size={24} />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
        >
          <X size={24} />
        </button>
        <nav className="p-4 mt-12">
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Home</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Bookmarks</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">History</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Settings</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SlidingDrawer;