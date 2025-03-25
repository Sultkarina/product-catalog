// src/app/components/CartItems.tsx
'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../store/store';
import Link from 'next/link';
import { Product } from '../store/store'; // Импортируем интерфейс

const CartItems = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  if (totalItems === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">Ваша корзина пуста</h2>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors duration-200"
        >
          Вернуться к покупкам
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* ... остальной код компонента ... */}
    </div>
  );
};

export default CartItems;