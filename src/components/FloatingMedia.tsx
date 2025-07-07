"use client";

import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  src: string;
  alt?: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  direction: "up" | "down" | "left" | "right" | "diagonal";
}

const FloatingMedia = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Sample media items with placeholder images
    const mediaItems = [
      {
        src: "https://placehold.co/320x280/3B82F6/FFFFFF?text=Code",
        alt: "Floating code",
      },
      {
        src: "https://placehold.co/280x340/8B5CF6/FFFFFF?text=Design",
        alt: "Floating design",
      },
      {
        src: "https://placehold.co/360x300/10B981/FFFFFF?text=Build",
        alt: "Floating build",
      },
      {
        src: "https://placehold.co/300x360/F59E0B/FFFFFF?text=Create",
        alt: "Floating create",
      },
      {
        src: "https://placehold.co/380x320/EF4444/FFFFFF?text=Innovate",
        alt: "Floating innovate",
      },
      {
        src: "https://placehold.co/340x380/06B6D4/FFFFFF?text=Learn",
        alt: "Floating learn",
      },
    ];

    // Generate random positions and properties for each item
    const generateItems = () => {
      return mediaItems.map((media, index) => {
        const quadrants = [
          { x: 10, y: 10 }, // Top Left
          { x: 70, y: 10 }, // Top Right
          { x: 10, y: 60 }, // Bottom Left
          { x: 70, y: 60 }, // Bottom Right
          { x: 40, y: 35 }, // Center
        ];

        const quadrant =
          quadrants[Math.floor(Math.random() * quadrants.length)];
        const size = Math.random() * 60 + 40; // 40-100px
        const delay = Math.random() * 5; // 0-5s delay
        const duration = Math.random() * 10 + 15; // 15-25s duration
        const directions = ["up", "down", "left", "right", "diagonal"];
        const direction = directions[
          Math.floor(Math.random() * directions.length)
        ] as FloatingItem["direction"];

        return {
          id: index,
          src: media.src,
          alt: media.alt,
          x: quadrant.x + (Math.random() - 0.5) * 20, // Add some randomness within quadrant
          y: quadrant.y + (Math.random() - 0.5) * 20,
          size,
          delay,
          duration,
          direction,
        };
      });
    };

    setItems(generateItems());
  }, []);

  const getAnimationClass = (direction: FloatingItem["direction"]) => {
    switch (direction) {
      case "up":
        return "animate-float-up";
      case "down":
        return "animate-float-down";
      case "left":
        return "animate-float-left";
      case "right":
        return "animate-float-right";
      case "diagonal":
        return "animate-float-diagonal";
      default:
        return "animate-float-up";
    }
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none z-10" />

      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute ${getAnimationClass(
            item.direction
          )} pointer-events-none`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover rounded-2xl opacity-30 hover:opacity-50 transition-opacity duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingMedia;
