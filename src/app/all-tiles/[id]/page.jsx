import Image from 'next/image';
import React from 'react';

const TileDetailsPage = async ({ params }) => {
    // 1. Await params to get the id
    const { id } = await params;

    // 2. Fetch the data
    const res = await fetch('https://tiles-gallary-assignment8.vercel.app/data.json');
    const data = await res.json();
    const allTiles = data.tiles;

    // 3. Find the specific tile (Using targetTile consistently)
    const targetTile = allTiles.find(tile => tile.id === id);

    // 4. Handle Case where tile isn't found
    if (!targetTile) {
        return <div className="text-center mt-20 text-2xl">Tile not found!</div>;
    }

    // 5. Success! (Logging targetTile instead of undefined 'tile')
    console.log(targetTile);

    return (
        <div className="container mx-auto p-10">
            <div className="flex flex-col lg:flex-row gap-10 bg-base-100 shadow-xl rounded-box p-6">
                {/* Visuals: Left Side */}
                <div className="lg:w-1/2">
                    <Image
                        src={targetTile.image}
                        alt={targetTile.title}
                        width={400}
                        height={300}
                        className="rounded-xl object-cover w-full h-[220px]"
                        onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/800x600?text=Image+Coming+Soon";
                        }}
                    />
                </div>

                {/* Info: Right Side */}
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold">{targetTile.title}</h1>
                    <div className="badge badge-primary uppercase">{targetTile.category}</div>

                    <p className="text-lg text-gray-600">{targetTile.description}</p>

                    <div className="divider"></div>

                    <div className="grid grid-cols-2 gap-4">
                        <p><strong>Material:</strong> {targetTile.material}</p>
                        <p><strong>Dimensions:</strong> {targetTile.dimensions}</p>
                        <p><strong>Price:</strong> {targetTile.currency} {targetTile.price}</p>
                        <p><strong>Status:</strong> {targetTile.inStock ? "In Stock" : "Out of Stock"}</p>
                    </div>

                    {/* Tags Section */}
                    <div className="flex gap-2 mt-4">
                        {targetTile.tags?.map((tag, index) => (
                            <span key={index} className="badge badge-outline">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetailsPage;