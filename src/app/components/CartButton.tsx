'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCart } from '../store/store';

export default function CartButton() {
  const { totalItems } = useCart();
  
  return (
    <Link
      href="/cart"
      className="flex items-center text-gray-700 hover:text-blue-600"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}