// components/Marquee.jsx
"use client";
import { useEffect, useState } from "react";

const Marquee = ({ tiles = [] }) => {
  const [marqueeItems, setMarqueeItems] = useState([]);

  useEffect(() => {
    // Generate marquee content from tiles or use default
    if (tiles && tiles.length > 0) {
      const items = tiles.map(tile =>
        `New Arrivals: ${tile.title} | Weekly Feature: Modern Geometric Patterns | Join the Community...`
      );
      setMarqueeItems(items);
    }
  }, [tiles]);

  return (
    <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex whitespace-nowrap">
          {/* First set */}
          <span className="text-white font-semibold text-lg mx-8 inline-block">
            🆕 New Arrivals: Ceramic Blue Tile |
            ⭐ Weekly Feature: Modern Geometric Patterns |
            🎨 Join the Community of Design Enthusiasts |
          </span>
          {/* Duplicate for seamless loop */}
          <span className="text-white font-semibold text-lg mx-8 inline-block">
            🆕 New Arrivals: Ceramic Blue Tile |
            ⭐ Weekly Feature: Modern Geometric Patterns |
            🎨 Join the Community of Design Enthusiasts |
          </span>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Marquee;