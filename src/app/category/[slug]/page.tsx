import SalesCampaignBanner from '@/components/layout/SalesCampaignBanner';
import Footer from '@/components/layout/Footer';
import { getCategoryBySlug, getProductsByCategorySlug } from '@/sanity/lib/client';
import React from 'react';
import ClientCategoryProducts from './ClientCategoryProducts';

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

            <ClientCategoryProducts products={products} />
            <Footer />
        </div>
    );
};

export default CategoryPage;
