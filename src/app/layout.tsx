import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    default: 'Nextjs Starter Template',
    template: '%s | Nextjs Starter Template',
  },
  description: 'Nextjs 14.2.1 + Tailwind CSS starter template',
};

export const viewport: Viewport = {
  themeColor: 'FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
