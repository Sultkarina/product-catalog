'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../store/store';
import Link from 'next/link';
import Image from 'next/image';

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
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          Вернуться к покупкам
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Товары в корзине ({totalItems})</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-24 w-24 rounded-md overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-700">${item.price}</span>
                        <span className="mx-2 text-gray-500">×</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="w-16 border border-gray-300 rounded text-center py-1"
                        />
                      </div>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Итого</h2>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <span>Товары ({totalItems})</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Общая сумма</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;