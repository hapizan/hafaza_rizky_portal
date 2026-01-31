import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InstallPrompt from '@/components/PWA/InstallPrompt';
import OfflineIndicator from '@/components/PWA/OfflineIndicator';
import UpdateNotification from '@/components/PWA/UpdateNotification';
import { generateMetadata as genMeta } from '@/lib/seo';
import { OrganizationSchema, WebSiteSchema } from '@/components/SEO/StructuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = genMeta({
  title: 'Hafaza Rizky Trading',
  description: 'Hafaza Rizky Trading (002898689-P) - Web Application, Mobile Application, and Training services',
  path: '/',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <InstallPrompt />
        <OfflineIndicator />
        <UpdateNotification />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('Service Worker registered:', registration);
                    })
                    .catch(function(error) {
                      console.log('Service Worker registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
