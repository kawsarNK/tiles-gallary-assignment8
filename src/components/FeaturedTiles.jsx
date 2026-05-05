import TilesCard from "./TilesCard";

const TopGeneration = async () => {
    const res = await fetch('https://tiles-gallary-assignment8.vercel.app/data.json'
        , {
            cache: 'no-store'
        });
    const tiles = await res.json()
    const topTiles = tiles.tiles.slice(0, 4)
    const safeTiles = topTiles.map(tile => ({
        id: tile.id,
        title: tile.title,
        description: tile.description,
        image: String(tile.image), // force string
        category: tile.category,
        material: tile.material
    }));


    return (
        <div className="text-center mb-12">
            <h3 className="font-bold mt-6 mb-3 text-3xl md:text-4xl">Featured Tiles</h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-2"></div>
            <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">

                {
                    safeTiles.map(tile => (
                        <TilesCard key={tile.id} tile={tile} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopGeneration;