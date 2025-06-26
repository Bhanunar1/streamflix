'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MovieCard } from '@/components/ui/movie-card';

const featuredMovies = [
  {
    id: 1,
    title: 'The Dark Knight',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 9.0,
    year: 2024,
    duration: '152 min',
    genres: ['Action', 'Crime', 'Drama'],
    description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.'
  },
  {
    id: 2,
    title: 'Inception',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 8.8,
    year: 2024,
    duration: '148 min',
    genres: ['Sci-Fi', 'Thriller'],
    description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.'
  },
  {
    id: 3,
    title: 'Interstellar',
    image: 'https://images.pexels.com/photos/2259232/pexels-photo-2259232.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 8.6,
    year: 2024,
    duration: '169 min',
    genres: ['Sci-Fi', 'Drama'],
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
  },
  {
    id: 4,
    title: 'The Matrix',
    image: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 8.7,
    year: 2024,
    duration: '136 min',
    genres: ['Action', 'Sci-Fi'],
    description: 'A computer programmer discovers reality as he knows it is actually a simulation.'
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 8.9,
    year: 2024,
    duration: '154 min',
    genres: ['Crime', 'Drama'],
    description: 'The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.'
  },
  {
    id: 6,
    title: 'Fight Club',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    rating: 8.8,
    year: 2024,
    duration: '139 min',
    genres: ['Drama', 'Thriller'],
    description: 'An insomniac office worker forms an underground fight club that evolves into something much more.'
  }
];

export function FeaturedContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const maxIndex = Math.max(0, featuredMovies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative px-4 lg:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Featured This Week</h2>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 disabled:opacity-50"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 disabled:opacity-50"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {featuredMovies.map((movie, index) => (
              <div key={movie.id} className={`flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 fade-in-up stagger-${index % 6 + 1}`}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#e50914]' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}