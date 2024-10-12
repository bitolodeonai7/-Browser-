import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FloatingSearchBar: React.FC<{ onSearch: (url: string) => void }> = ({ onSearch }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(url);
  };

  return (
    <form onSubmit={handleSubmit} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex items-center bg-gray-800 rounded-full shadow-lg p-2 glow-effect">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="bg-transparent outline-none px-4 w-64 text-gray-100 placeholder-gray-400"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-full">
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default FloatingSearchBar;