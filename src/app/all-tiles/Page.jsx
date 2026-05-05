
import TilesCard from '@/components/TilesCard';
import React from 'react';

const AllTiles = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    // ('https://tiles-gallary-assignment8.vercel.app/data.json')
    const tiles = await res.json()
    const topTiles = tiles.tiles;
    const safeTiles = topTiles.map(tile => ({
        id: tile.id,
        title: tile.title,
        description: tile.description,
        image: String(tile.image), // force string
        category: tile.category,
        material: tile.material
    }));

    return (
        <div>
            <h3 className="font-bold my-5">This is All tiles card</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">

                {
                    safeTiles.map(tile => (
                        <TilesCard key={tile.id} tile={tile} />
                    ))
                }
            </div>
        </div>
    );
};
export default AllTiles;