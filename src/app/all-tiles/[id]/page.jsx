// app/all-tiles/[id]/page.jsx
import React from 'react';
import Link from 'next/link';

const TileDetailsPage = async ({ params }) => {
    // 1. Await params to get the id
    const { id } = await params;

    // 2. Fetch the data
    const res = await fetch('https://tiles-gallary-assignment8.vercel.app/data.json');
    const data = await res.json();
    const allTiles = data.tiles;

    // 3. Find the specific tile
    const targetTile = allTiles.find(tile => tile.id === id);

    // 4. Handle Case where tile isn't found
    if (!targetTile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Tile Not Found</h2>
                    <p className="text-gray-600 mb-6">The tile you're looking for doesn't exist or has been removed.</p>
                    <Link
                        href="/all-tiles"
                        className="btn bg-amber-500 hover:bg-amber-600 text-white border-none px-8"
                    >
                        Back to Gallery
                    </Link>
                </div>
            </div>
        );
    }

    // Get category color for badge
    const getCategoryColor = (category) => {
        const colors = {
            ceramic: 'bg-amber-100 text-amber-800 border-amber-300',
            stone: 'bg-gray-100 text-gray-800 border-gray-300',
            'wood-look': 'bg-green-100 text-green-800 border-green-300',
            glass: 'bg-blue-100 text-blue-800 border-blue-300',
            porcelain: 'bg-purple-100 text-purple-800 border-purple-300',
            marble: 'bg-pink-100 text-pink-800 border-pink-300',
            mosaic: 'bg-indigo-100 text-indigo-800 border-indigo-300',
            metallic: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        };
        return colors[category?.toLowerCase()] || 'bg-amber-100 text-amber-800 border-amber-300';
    };

    return (
        <div className="min-h-screen bg-base-200 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                <div className="mb-6 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-amber-600 transition-colors">Home</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/all-tiles" className="text-gray-500 hover:text-amber-600 transition-colors">All Tiles</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-amber-600 font-medium">{targetTile.title}</span>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left: Image Section */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px]">
                                <img
                                    src={targetTile.image}
                                    alt={targetTile.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border shadow-lg ${getCategoryColor(targetTile.category)}`}>
                                        {targetTile.category}
                                    </span>
                                </div>

                                {/* Stock Status Badge */}
                                <div className="absolute top-4 right-4">
                                    {targetTile.inStock ? (
                                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500 text-white shadow-lg flex items-center gap-2">
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                            In Stock
                                        </span>
                                    ) : (
                                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-red-500 text-white shadow-lg">
                                            Out of Stock
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right: Details Section */}
                        <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">

                            {/* Title & Category */}
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                    {targetTile.title}
                                </h1>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-500">By Design Studio</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span className="text-sm text-gray-500">Premium Collection</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-6 bg-amber-50 rounded-2xl p-4 border border-amber-100">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-bold text-amber-600">
                                        ${targetTile.price}
                                    </span>
                                    <span className="text-gray-500 text-lg">{targetTile.currency}</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">per tile • Free shipping on orders over $500</p>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {targetTile.description}
                                </p>
                            </div>

                            {/* Specifications Grid */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <span className="text-xs text-gray-500 uppercase block mb-1">Material</span>
                                        <span className="font-semibold text-gray-800">{targetTile.material}</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <span className="text-xs text-gray-500 uppercase block mb-1">Dimensions</span>
                                        <span className="font-semibold text-gray-800">{targetTile.dimensions}</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <span className="text-xs text-gray-500 uppercase block mb-1">Category</span>
                                        <span className="font-semibold text-gray-800 capitalize">{targetTile.category}</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <span className="text-xs text-gray-500 uppercase block mb-1">Style</span>
                                        <span className="font-semibold text-gray-800">Modern</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            {targetTile.tags && targetTile.tags.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {targetTile.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                                <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    Add to Cart
                                </button>
                                <button className="flex-1 border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                                    Add to Wishlist
                                </button>
                            </div>

                            {/* Back Button */}
                            <Link
                                href="/all-tiles"
                                className="mt-6 inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors text-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetailsPage;