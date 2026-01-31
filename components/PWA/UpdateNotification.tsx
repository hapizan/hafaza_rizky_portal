'use client';

import { useState, useEffect } from 'react';
import { FiRefreshCw, FiX } from 'react-icons/fi';

export default function UpdateNotification() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    let refreshing = false;

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    const checkForUpdates = async () => {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (!registration) return;

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        });

        await registration.update();
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    // Check for updates on mount
    checkForUpdates();

    // Check for updates periodically
    const interval = setInterval(checkForUpdates, 60000); // Every minute

    return () => clearInterval(interval);
  }, []);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    }
  };

  const handleDismiss = () => {
    setUpdateAvailable(false);
  };

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-blue-600 text-white rounded-lg shadow-2xl p-4 animate-slide-up">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <FiRefreshCw className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Update Available</h3>
          <p className="text-sm opacity-90 mb-3">
            A new version of the app is available. Update now for the latest features.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="flex-1 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm touch-manipulation"
            >
              Update Now
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 touch-manipulation"
              aria-label="Dismiss"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
