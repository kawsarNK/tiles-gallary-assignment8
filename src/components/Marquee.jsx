"use client";
import { useMemo } from "react";

const Marquee = ({ tiles = [] }) => {
  const marqueeText = useMemo(() => {
    if (tiles && tiles.length > 0) {
      return tiles
        .map(
          tile =>
            `New Arrivals: ${tile.title} | Weekly Feature: Modern Geometric Patterns | Join the Community...`
        )
        .join(" ");
    }

    return "New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric Patterns | Join the Community of Design Enthusiasts |";
  }, [tiles]);

  const marqueeItems = [marqueeText, marqueeText];

  return (
    <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-4 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((text, index) => (
            <span key={index} className="text-white font-semibold text-lg mx-8 inline-block">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;