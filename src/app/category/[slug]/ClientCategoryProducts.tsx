"use client";
import { useState, useMemo } from "react";
import ProductGrid from '@/components/product/ProductGrid';

const FilterPanel = ({ onSortChange, activeSort }: { onSortChange: (sort: string) => void, activeSort: string }) => (
  <div className="container mx-auto px-8 max-w-7xl mb-6">
    <div className="flex flex-wrap items-center gap-4 bg-white rounded-xl p-4">
      <span className="font-medium text-[#ba7d62]">Saralash:</span>
      {[
        { key: 'price-asc', label: 'Narx: arzon → qimmat' },
        { key: 'price-desc', label: 'Narx: qimmat → arzon' },
        { key: 'alpha-asc', label: 'Alifbo: A → Z' },
        { key: 'alpha-desc', label: 'Alifbo: Z → A' },
        { key: 'sold-desc', label: 'Eng ko‘p sotilgan' },
      ].map(({ key, label }) => (
        <button
          key={key}
          className={`px-4 py-2 rounded-md border border-[#ba7d62] font-medium transition
            ${activeSort === key ? 'bg-[#ba7d62] border-[#ba7d62] text-white' : 'bg-white text-[#ba7d62] hover:bg-[#ba7d62] hover:text-white'}
          `}
          onClick={() => onSortChange(activeSort === key ? '' : key)}
        >
          {label}
        </button>
      ))}
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
    let arr = [...products];
    if (sort === 'price-asc') arr.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') arr.sort((a, b) => b.price - a.price);
    if (sort === 'alpha-asc') arr.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'alpha-desc') arr.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === 'sold-desc') arr.sort((a, b) => getSoldCount(b) - getSoldCount(a));
    return arr;
  }, [products, sort]);

  return (
    <>
      <FilterPanel onSortChange={setSort} activeSort={sort} />
      <section className="container mx-auto py-8 px-8 max-w-7xl">
        <ProductGrid products={sortedProducts} />
      </section>
    </>
  );
}
