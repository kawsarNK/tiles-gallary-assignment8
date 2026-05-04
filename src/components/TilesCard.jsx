"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TilesCard = ({ tile }) => {
    
    const getCategoryColor = (category) => {
        const colors = {
            ceramic: 'bg-amber-100 text-amber-800 border-amber-200',
            stone: 'bg-gray-100 text-gray-800 border-gray-200',
            'wood-look': 'bg-green-100 text-green-800 border-green-200',
            glass: 'bg-blue-100 text-blue-800 border-blue-200',
            porcelain: 'bg-purple-100 text-purple-800 border-purple-200',
            marble: 'bg-pink-100 text-pink-800 border-pink-200',
            mosaic: 'bg-indigo-100 text-indigo-800 border-indigo-200',
            metallic: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        };
        return colors[category?.toLowerCase()] || 'bg-amber-100 text-amber-800 border-amber-200';
    };

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">

            {/* Image Section */}
            <div className="relative overflow-hidden">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    width={400}
                    height={250}
                    className="object-cover rounded-t-2xl"
                />

                {/* Category Badge - Top Right */}
                <span className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm ${getCategoryColor(tile.category)}`}>
                    {tile.category}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-3">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-amber-600 transition-colors duration-300">
                    {tile.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {tile.description || "Premium quality tile for your perfect space"}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Bottom Section: Material & Button */}
                <div className="flex items-center justify-between gap-3">
                    {/* Material Badge */}
                    {tile.material && (
                        <span className="text-xs text-gray-500 font-medium bg-gray-50 px-2.5 py-1 rounded-full">
                            {tile.material}
                        </span>
                    )}

                    {/* View Details Button */}
                    <Link
                        href={`/all-tiles/${tile.id}`}

                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-300 group/link"
                    >
                        View Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;