"use client";
import { useState, useMemo } from "react";
import ProductGrid from '@/components/product/ProductGrid';

const FilterPanel = ({ onSortChange }: { onSortChange: (sort: string) => void }) => (
  <div className="container mx-auto px-8 max-w-7xl mb-6">
    <div className="flex flex-wrap items-center gap-4 bg-white rounded-xl p-4">
      <span className="font-medium text-[#ba7d62]">Saralash:</span>
      <button
        className="px-4 py-2 rounded-md border border-[#ba7d62] text-[#ba7d62] bg-white hover:bg-[#ba7d62] hover:text-white transition font-medium"
        onClick={() => onSortChange('price-asc')}
      >Narx: arzon → qimmat</button>
      <button
        className="px-4 py-2 rounded-md border border-[#ba7d62] text-[#ba7d62] bg-white hover:bg-[#ba7d62] hover:text-white transition font-medium"
        onClick={() => onSortChange('price-desc')}
      >Narx: qimmat → arzon</button>
      <button
        className="px-4 py-2 rounded-md border border-[#ba7d62] text-[#ba7d62] bg-white hover:bg-[#ba7d62] hover:text-white transition font-medium"
        onClick={() => onSortChange('alpha-asc')}
      >Alifbo: A → Z</button>
      <button
        className="px-4 py-2 rounded-md border border-[#ba7d62] text-[#ba7d62] bg-white hover:bg-[#ba7d62] hover:text-white transition font-medium"
        onClick={() => onSortChange('alpha-desc')}
      >Alifbo: Z → A</button>
      <button
        className="px-4 py-2 rounded-md border border-[#ba7d62] text-[#ba7d62] bg-white hover:bg-[#ba7d62] hover:text-white transition font-medium"
        onClick={() => onSortChange('sold-desc')}
      >Eng ko‘p sotilgan</button>
    </div>
  </div>
);

function getSoldCount(product: any) {
  // Demo uchun random value, real loyihada product.soldCount yoki shunga o‘xshash field bo‘lishi kerak
  return product.soldCount ?? (100 + Math.abs(product._id.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) % 500));
}

export default function ClientCategoryProducts({ products }: { products: any[] }) {
  const [sort, setSort] = useState<string>('');

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    if (sort === 'price-asc') arr.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') arr.sort((a, b) => b.price - a.price);
    if (sort === 'alpha-asc') arr.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'alpha-desc') arr.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === 'sold-desc') arr.sort((a, b) => getSoldCount(b) - getSoldCount(a));
    return arr;
  }, [products, sort]);

  return (
    <>
      <FilterPanel onSortChange={setSort} />
      <section className="container mx-auto py-8 px-8 max-w-7xl">
        <ProductGrid products={sortedProducts} />
      </section>
    </>
  );
}
