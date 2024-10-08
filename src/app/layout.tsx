import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spacemono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'OZELOT BRANCHING',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spacemono.className}>{children}</body>
    </html>
  );
}
