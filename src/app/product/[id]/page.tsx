import SalesCampaignBanner from '@/components/layout/SalesCampaignBanner';
import AddToCartButton from '@/components/product/AddToCartButton';
import { formatPrice } from '@/lib/utils';
import { getProductById } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Home, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductPage = async ({ params }: { params: Promise<{ id: string }> } ) => {
    const { id } = await params;
    const product = await getProductById(id);

    if(!product.price) {
        return <div>Product not found</div>;
    }

    const originalPrice = product.price * 5;

  return (
    <div className='bg-gray-50'>
        <SalesCampaignBanner />

        {/* Breadcrumb Navigation */}
        <div className='bg-white border-b border-gray-200'>
            <div className='container mx-auto py-3 px-4'>
                <div className='flex items-center gap-2 text-sm'>
                    <Link
                        href='/'
                        className='text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1'
                    >
                        <Home className='w-4 h-4' />
                        <span>Home</span>
                    </Link>
                    <ChevronRight className='w-4 h-4 text-gray-400' />
                    <span className='text-gray-400 truncate'>
                        {product.title}
                    </span>
                </div>
            </div>
        </div>

        {/* Product Details */}
        <div className='container mx-auto py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Product image */}
                {product.image && (
                    <div className='bg-white rounded-2xl p-4 aspect-square overflow-hidden shadow-lg'>
                        <div className='relative aspect-square'>
                            <Image
                                fill
                                priority
                                className='object-cover hover:scale-105 transition-transform duration-300'
                                alt={product.title ?? 'Product Image'}
                                src={urlFor(product.image).url()}
                            />
                        </div>
                    </div>
                )}

                {/* Product information */}
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                        {product.title}
                    </h1>
                    <p className='text-gray-600'>
                        {product.description}
                    </p>

                    {/* Price section */}
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-baseline gap-1'>
                                <span className='text-xs font-bold text-red-600'>US</span>
                                <span className='text-5xl font-black text-red-600 tracking-tight'>
                                    {formatPrice(product.price).replace('$', '')}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-lg text-gray-400 line-through decoration-red-500/50 decoration-2'>
                                    {formatPrice(originalPrice)}
                                </span>
                                <div className='flex items-center gap-2'>
                                    <span className='bg-red-600 text-white px-2 py-0.5 rounded text-sm font-bold animate-pulse'>
                                        -80%
                                    </span>
                                    <span className='text-red-600 font-bold text-sm'>
                                        Katta savdo
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 bg-red-50 p-2 rounded-lg'>
                            <span className='text-red-600 font-bold'>💰</span>
                            <span className='text-red-600 font-medium text-sm'>
                                Siz saqlab qoldingiz: {formatPrice(originalPrice - product.price)}!
                            </span>
                        </div>
                        <div className='flex items-center gap-2 text-xs text-gray-600'>
                            <span className='inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                            <span>{Math.floor(Math.random() * 50) + 20} ta odam so&apos;ngi bir sotib oldi</span>
                        </div>
                    </div>

                    <AddToCartButton product={product} buttonClassName="w-full text-center bg-white border border-[#ba7d62] text-[#1a1a1a] py-4 rounded-full text-lg font-bold hover:bg-[#c6947d] hover:text-white transition-all block shadow-none mt-4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage