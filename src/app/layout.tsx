import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import CartButton from './components/CartButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Каталог товаров',
  description: 'Тестовое задание для Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Каталог товаров
            </Link>
            <nav>
              <CartButton />
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}