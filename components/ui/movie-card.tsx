'use client';

import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface Movie {
  id: string | number;
  title: string;
  image: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  description: string;
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HoverCard openDelay={500} closeDelay={200}>
      <HoverCardTrigger asChild>
        <div 
          className="relative group cursor-pointer movie-card-hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Movie Poster */}
          <div className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={movie.image}
              alt={movie.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#e50914] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Overlay on hover */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="bg-white/90 hover:bg-white text-black rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                >
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </Button>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium text-white">
              ★ {movie.rating}
            </div>
          </div>

          {/* Movie Info */}
          <div className="mt-3 space-y-1">
            <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-[#e50914] transition-colors">
              {movie.title}
            </h3>
            <p className="text-gray-400 text-xs">
              {movie.year} • {movie.duration}
            </p>
          </div>
        </div>
      </HoverCardTrigger>

      <HoverCardContent 
        className="w-80 p-0 bg-zinc-900 border-zinc-700 shadow-2xl" 
        side="top" 
        align="start"
      >
        <div className="relative">
          {/* Header Image */}
          <div className="relative h-40 bg-gray-800 rounded-t-lg overflow-hidden">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title and Rating */}
            <div className="flex items-start justify-between">
              <h3 className="text-white font-bold text-lg leading-tight">{movie.title}</h3>
              <div className="flex items-center space-x-1 text-yellow-400">
                <span className="text-sm">★</span>
                <span className="text-sm font-medium">{movie.rating}</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-1">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {movie.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 pt-2">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold flex-1">
                <Play className="h-4 w-4 mr-2 fill-current" />
                Play
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}