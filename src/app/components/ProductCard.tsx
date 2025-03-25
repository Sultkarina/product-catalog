// src/app/components/ProductCard.tsx
'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../store/store';
import { Product } from '../store/store'; // Импортируем интерфейс из хранилища
import Image from 'next/image'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 h-48 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={160}
          height={160}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-800 font-bold">${product.price.toFixed(2)}</span>
          <span className="text-yellow-500">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center transition-colors duration-200"
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;