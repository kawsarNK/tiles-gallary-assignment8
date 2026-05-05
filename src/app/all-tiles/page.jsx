"use client";

import { useState, useEffect } from 'react';
import TilesCard from '@/components/TilesCard';
import 'animate.css';

const AllTiles = () => {
    const [tiles, setTiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTiles();
    }, []);

    const fetchTiles = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://tiles-gallary-assignment8.vercel.app/data.json');

            if (!res.ok) {
                throw new Error('Failed to fetch tiles');
            }

            const data = await res.json();
            const topTiles = data.tiles;

            const safeTiles = topTiles.map(tile => ({
                id: tile.id,
                title: tile.title,
                description: tile.description,
                image: String(tile.image),
                category: tile.category,
                material: tile.material
            }));

            setTiles(safeTiles);
            setError(null);
        } catch (err) {
            console.error('Error fetching tiles:', err);
            setError('Failed to load tiles. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Filter tiles based on search term
    const filteredTiles = tiles.filter(tile =>
        tile.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-amber-500"></div>
                    <p className="mt-4 text-gray-600">Loading tiles...</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-base-200 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                        Our Tile Collection
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our complete range of premium tiles for every space and style
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
                </div>

                {/* Search Bar Hero UI */}
                <div className="max-w-3xl mx-auto mb-10">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            type="text"
                            placeholder="Search tiles by name... (e.g., Ceramic Blue, Marble, Oak)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 md:py-5 text-lg bg-white rounded-2xl shadow-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all duration-300 hover:shadow-xl"
                        />

                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="text-center mt-3">
                        {searchTerm ? (
                            <p className="text-gray-600">
                                Found <span className="font-semibold text-amber-600">{filteredTiles.length}</span> tiles
                                for <span className="font-semibold">{searchTerm}</span>
                            </p>
                        ) : (
                            <p className="text-gray-500">
                                Showing all <span className="font-semibold text-amber-600">{tiles.length}</span> tiles
                            </p>
                        )}
                    </div>
                </div>

                {/* Tiles Grid */}
                {filteredTiles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredTiles.map((tile, index) => (
                            <div
                                key={tile.id}
                                className="animate__animated animate__fadeInUp"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <TilesCard tile={tile} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Tiles Found</h3>
                        <p className="text-gray-600 mb-6">
                            We couldn't find any tiles matching {searchTerm}. Try a different search term.
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="btn bg-amber-500 hover:bg-amber-600 text-white border-none px-8"
                        >
                            View All Tiles
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTiles;