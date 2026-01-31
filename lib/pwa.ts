export const pwaConfig = {
  name: 'Hafaza Rizky Trading',
  shortName: 'Hafaza Rizky',
  description: 'Web Application, Mobile Application, and Training services',
  themeColor: '#0ea5e9',
  backgroundColor: '#ffffff',
};

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
}
