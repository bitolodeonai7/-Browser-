import React, { useState } from 'react';
import FloatingSearchBar from './components/FloatingSearchBar';
import SlidingDrawer from './components/SlidingDrawer';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [currentUrl, setCurrentUrl] = useState('');

  const handleSearch = (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    setCurrentUrl(fullUrl);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <FloatingSearchBar onSearch={handleSearch} />
      <SlidingDrawer />
      <main className="flex-grow p-4 pt-20 pb-20">
        {currentUrl ? (
          <iframe
            src={currentUrl}
            className="w-full h-full border-none rounded-lg shadow-lg"
            title="Rendered Website"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-400">Enter a URL to render a website</p>
          </div>
        )}
      </main>
      <BottomNavigation />
    </div>
  );
}

export default App;