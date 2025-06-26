'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MovieCard } from '@/components/ui/movie-card';

interface CategorySectionProps {
  title: string;
  category: string;
}

const getMoviesByCategory = (category: string) => {
  const baseMovies = [
    {
      id: 1,
      title: 'Avatar: The Way of Water',
      image: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.1,
      year: 2024,
      duration: '192 min',
      genres: ['Sci-Fi', 'Adventure'],
      description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.'
    },
    {
      id: 2,
      title: 'Dune: Part Two',
      image: 'https://images.pexels.com/photos/2259232/pexels-photo-2259232.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.9,
      year: 2024,
      duration: '166 min',
      genres: ['Sci-Fi', 'Drama'],
      description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.'
    },
    {
      id: 3,
      title: 'Spider-Man: No Way Home',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.4,
      year: 2024,
      duration: '148 min',
      genres: ['Action', 'Adventure'],
      description: 'Peter Parker seeks help from Doctor Strange when his identity is revealed.'
    },
    {
      id: 4,
      title: 'Top Gun: Maverick',
      image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.7,
      year: 2024,
      duration: '131 min',
      genres: ['Action', 'Drama'],
      description: 'Maverick confronts his past while training a new generation of graduates.'
    },
    {
      id: 5,
      title: 'The Batman',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.2,
      year: 2024,
      duration: '176 min',
      genres: ['Action', 'Crime'],
      description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues.'
    },
    {
      id: 6,
      title: 'Everything Everywhere All at Once',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 8.1,
      year: 2024,
      duration: '139 min',
      genres: ['Sci-Fi', 'Comedy'],
      description: 'A Chinese-American woman gets swept up in an insane adventure in which she alone can save existence.'
    }
  ];

  // Modify titles and details based on category
  return baseMovies.map((movie, index) => ({
    ...movie,
    id: `${category}-${movie.id}`,
    title: category === 'series' ? `${movie.title} Series` : 
           category === 'documentaries' ? `${movie.title}: The Story` : 
           movie.title
  }));
};

export function CategorySection({ title, category }: CategorySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const movies = getMoviesByCategory(category);
  const itemsPerView = 5;
  const maxIndex = Math.max(0, movies.length - itemsPerView);

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
          <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
          <div className="hidden lg:flex space-x-2">
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
            {movies.map((movie, index) => (
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