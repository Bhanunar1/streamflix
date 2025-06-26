'use client';

import { useState } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 h-full flex items-center">
        <div className="max-w-2xl space-y-6 text-white fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-[#e50914]/20 backdrop-blur-sm border border-[#e50914]/30 rounded-full">
            <span className="text-sm font-medium text-[#e50914]">New Release</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow">
            Stranger Things
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl text-shadow">
            When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.
          </p>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="bg-white/10 px-2 py-1 rounded">2024</span>
            <span>4 Seasons</span>
            <span>Sci-Fi • Drama • Thriller</span>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span>8.7</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-md transition-all duration-200 flex items-center space-x-2">
              <Play className="h-5 w-5 fill-current" />
              <span>Play</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-md transition-all duration-200 flex items-center space-x-2">
              <Info className="h-5 w-5" />
              <span>More Info</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Volume Control */}
      <div className="absolute bottom-24 right-6 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/20 hover:bg-black/40 text-white border border-white/20 rounded-full backdrop-blur-sm"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}