"use client";
import { formatPrice } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import { useCartStore } from '@/stores/cart-store';
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useShallow } from 'zustand/shallow'

type AddToCartButtonProps = {
    product: Product;
    buttonClassName?: string;
}
const AddToCartButton = ({ product, buttonClassName }: AddToCartButtonProps) => {
    const { cartId, addItem, open } = useCartStore(
        useShallow((state) => ({
            cartId: state.cartId,
            addItem: state.addItem,
            open: state.open,
        }))
    )

    const [isLoading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        if(!product.title || product.price === undefined || !product.image) {
            return;
        }
        setLoading(true);

        // Add the item to the cart
        await new Promise(resolve => setTimeout(resolve, 600));

        addItem({
            id: product._id,
            title: product.title,
            price: product.price,
            image: urlFor(product.image).url(),
            quantity: 1,
        });

        try {
            const anyWindow = window as any;

            if(anyWindow.umami) {
                anyWindow.umami.track('add_to_cart', {
                    cartId: cartId,
                    productId: product._id,
                    productName: product.title,
                    price: product.price,
                    currency: 'USD',
                })
            }
        } catch(e) {}

        setLoading(false);
        open();
    }

    if(!product.price) {
        return null;
    }

  return (
    <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`
            w-full mt-6 bg-white border border-[#ba7d62] text-[#1a1a1a] py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3
            hover:bg-[#c6947d] hover:text-white transition-all shadow-none
            disabled:opacity-80 disabled:cursor-not-allowed
            ${buttonClassName ?? ''}
        `}
    >
        {isLoading ? (
            <>
                <Loader2 className='w-7 h-7 animate-spin' />
                <span className='text-lg'>Savatga qo‘shilmoqda...</span>
            </>
        ) : (
            <>
                <svg 
                    className="w-7 h-7" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                <span className='text-xl font-bold'>Savatga qo‘shish - {formatPrice(product.price)}</span>
            </>
        )}
    </button>
  )
}

export default AddToCartButton