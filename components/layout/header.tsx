'use client';

import { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Play className="h-8 w-8 text-[#e50914] fill-current" />
              <span className="text-2xl font-bold text-white">StreamFlix</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">TV Shows</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Movies</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">New & Popular</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">My List</a>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <Input
                    type="search"
                    placeholder="Titles, people, genres"
                    className="w-64 bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:bg-black/80"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Notifications - Desktop */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:bg-white/10"
            >
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Menu - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden lg:flex">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-black/90 border-white/20">
                <DropdownMenuItem className="text-white hover:bg-white/10">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10">
                  Help
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">TV Shows</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Movies</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">New & Popular</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">My List</a>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Profile</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Settings</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Help</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Sign Out</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}