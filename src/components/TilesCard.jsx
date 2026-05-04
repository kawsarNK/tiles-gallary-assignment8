import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TilesCard = ({ tile }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm mx-auto">

            {/* Image Section */}
            <div className="relative">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-[220px]"
                />

                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                    {tile.category}
                </span>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold">
                    {tile.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        {/* <Heart size={18} /> */}
                        <span>likes</span>
                    </div>

                    <div className="flex items-center gap-1">
                        {/* <Download size={18} /> */}
                        <span>downloads</span>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/all-tiles/${tile.id}`}><button className="w-full border rounded-full py-2 hover:bg-gray-100 transition">
                    View
                </button>
                </Link>
            </div>
        </div>
    );
};

export default TilesCard;