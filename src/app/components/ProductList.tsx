'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../store/store';
import LoadingSkeleton from './LoadingSkeleton';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery, categoryFilter } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = 'https://fakestoreapi.com/products';
        if (categoryFilter) {
          url = `https://fakestoreapi.com/products/category/${encodeURIComponent(categoryFilter)}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryFilter]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingSkeleton count={8} />;
  }

  if (!products.length) {
    return <div className="text-center py-8 text-red-500">Ошибка загрузки товаров</div>;
  }

  if (filteredProducts.length === 0) {
    return <div className="text-center py-8">Товары не найдены</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};