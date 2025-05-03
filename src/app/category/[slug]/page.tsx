import SalesCampaignBanner from '@/components/layout/SalesCampaignBanner';
import ProductGrid from '@/components/product/ProductGrid';
import Footer from '@/components/layout/Footer';
import { getCategoryBySlug, getProductsByCategorySlug } from '@/sanity/lib/client';
import React from 'react';

type CategoryPageProps = {
    params: Promise<{ slug: string }>;
};
const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    const [category, products] = await Promise.all([getCategoryBySlug(slug), getProductsByCategorySlug(slug)]);

    return (
        <div>
            <SalesCampaignBanner />

            <div className='bg-[#f7f1ec] p-4'>
                <div className='container mx-auto'>
                    <h1 className='text-2xl md:text-3xl font-bold text-center mb-2' style={{ color: '#ba7d62' }}>{category.title}</h1>
                    <p className='text-center text-gray-600 text-xs mt-2'>{category.description}</p>
                </div>
            </div>

            <section className='container mx-auto py-8'>
                <ProductGrid products={products} />
            </section>
            <Footer />
        </div>
    );
};

export default CategoryPage;
