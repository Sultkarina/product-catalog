// src/app/components/ProductList.tsx
'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../store/store';
import { Product } from '../store/store'; // Импортируем интерфейс

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // Указываем тип Product[]
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery, categoryFilter } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://fakestoreapi.com/products';
        if (categoryFilter) {
          url = `https://fakestoreapi.com/products/category/${encodeURIComponent(categoryFilter)}`;
        }
        const response = await fetch(url);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data: string[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [categoryFilter]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8">Загрузка товаров...</div>;
  }

  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">Товары не найдены</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;