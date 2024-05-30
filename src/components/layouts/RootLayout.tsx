import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import type { ReactNode } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
