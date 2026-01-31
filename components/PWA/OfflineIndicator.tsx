'use client';

import { useState, useEffect } from 'react';
import { FiWifiOff, FiWifi } from 'react-icons/fi';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50 bg-yellow-500 text-white rounded-lg shadow-lg p-4 animate-slide-down">
      <div className="flex items-center gap-3">
        <FiWifiOff className="w-5 h-5 flex-shrink-0" />
        <div>
          <p className="font-semibold text-sm">You&apos;re offline</p>
          <p className="text-xs opacity-90">
            Some features may be limited. Content is cached for offline access.
          </p>
        </div>
      </div>
    </div>
  );
}
