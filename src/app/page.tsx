import { Suspense } from 'react';
import ProductList from './components/ProductList';
import SearchAndFilter from './components/SearchAndFilter';
import LoadingSkeleton from './components/LoadingSkeleton';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
      
      <SearchAndFilter />
      
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  );
}