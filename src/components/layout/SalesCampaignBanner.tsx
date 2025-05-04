'use client'
import React, { useState } from 'react'

const SalesCampaignBanner = () => {
    const [showFirstImageSet, setShowFirstImageSet] = useState(true);

    const toggleImages = () => {
        setShowFirstImageSet(!showFirstImageSet);
    };

    return (
        <div className="container mx-auto px-8 mt-8">
            <div className="w-full min-h-[200px] py-12 px-8 mb-8 flex flex-col md:flex-row items-center justify-between relative rounded-3xl border border-[#e5d3c6] bg-white shadow-sm">
                {/* Left navigation button */}
                <button
                    onClick={toggleImages}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#f9ede3] rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-[#e5d3c6] transition-colors duration-200"
                    aria-label="Previous images"
                >
                    <span className="text-xl font-bold text-[#BA7D62]">&lt;</span>
                </button>

                {/* Text content - left side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-0 mx-2 sm:mx-6 max-w-xl gap-1">
                    <h1 className="text-xl sm:text-3xl text-gray-700 font-semibold tracking-wide leading-snug">
                        Haqiqiy go&apos;zallikni
                        <span className="mx-1 font-semibold" style={{ color: '#BA7D62' }}>Elegentlife</span>
                        bilan kashf eting
                    </h1>
                    <h3 className="text-base sm:text-lg italic text-gray-500 font-normal">
                        Oddiy kun bo&apos;lsin yoki bayram,
                        <span className="font-medium ml-1">siz doim go&apos;zalsiz!</span>
                    </h3>
                </div>

                {/* Images - right side */}
                <div className="flex flex-col gap-4 pr-0">
                    {showFirstImageSet ? (
                        <div className="flex gap-4">
                            <img src="/shahnoza.svg" alt="Image 1" className="h-28 w-auto" />
                            <img src="/Rectangle.svg" alt="Image 2" className="h-28 w-auto" />
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <img src="/Rectangle2.svg" alt="Alternate Image 1" className="h-28 w-auto" />
                            <img src="/rectangle3.svg" alt="Alternate Image 2" className="h-28 w-auto" />
                        </div>
                    )}
                </div>

                {/* Right navigation button */}
                <button
                    onClick={toggleImages}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#f9ede3] rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-[#e5d3c6] transition-colors duration-200"
                    aria-label="Next images"
                >
                    <span className="text-xl font-bold text-[#BA7D62]">&gt;</span>
                </button>
            </div>
        </div>
    )
}

export default SalesCampaignBanner