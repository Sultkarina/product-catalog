import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from './store/store';

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
              <Link
                href="/cart"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <CartCounter />
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

function CartCounter() {
  const { totalItems } = useCart();
  
  if (totalItems === 0) return null;
  
  return (
    <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
      {totalItems}
    </span>
  );
}