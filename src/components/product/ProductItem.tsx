import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type ProductItemProps = {
    product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden relative w-[200px]  flex flex-col items-center'>
        {/* <div className='absolute top-2 right-2 z-10'>
            <span className='bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce'>Yangi!</span>
        </div> */}

        <div className="relative w-full h-72 flex items-center justify-center bg-gray-50 overflow-hidden rounded-md">
            {product.image && (
                <Image
                    src={urlFor(product.image).width(400).height(288).url()}
                    alt={product.title || 'Product Image'}
                    width={200}
                    height={288}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            )}
        </div>

        <div className='p-4 w-full flex flex-col items-center'>
            <h3 className='text-sm font-medium line-clamp-2 min-h-[40px] w-full text-center mb-1'>{product.title}</h3>
            <div className='flex flex-col w-full'>
                <div className='flex items-center gap-2 justify-center'>
                    <span className='text-lg font-bold text-red-500'>${(product.price || 0).toFixed(2)}</span>
                    <span className='text-sm text-gray-400 line-through'>${((product.price || 0) * 5).toFixed(2)}</span>
                </div>
                <div className='text-xs text-green-500 font-semibold mb-2 text-center'>
                    🔥 {100 + Math.abs(product._id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 500)}+ oxirgi 24 soat ichida sotilgan
                </div>
                <Link 
                    href={`/product/${product._id}`}
                    className='w-full text-center bg-white border border-[#ba7d62] text-[#1a1a1a] py-2 rounded-md text-sm font-medium hover:bg-[#c6947d] hover:text-white transition-all block'
                >
                    Xarid qilish
                </Link>
                <div className='text-xs text-red-500 text-center mt-1 animate-pulse'>⚡ Cheklangan vaqtda taklif!</div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem