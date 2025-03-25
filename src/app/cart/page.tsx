import { Suspense } from 'react';
import CartItems from './../components/CartItems';
import LoadingSkeleton from './../components/LoadingSkeleton';

export default function CartPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Корзина</h1>
      
      <Suspense fallback={<LoadingSkeleton />}>
        <CartItems />
      </Suspense>
    </main>
  );
}