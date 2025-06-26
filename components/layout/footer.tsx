import { Play, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Play className="h-8 w-8 text-[#e50914] fill-current" />
              <span className="text-2xl font-bold text-white">StreamFlix</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium destination for unlimited entertainment. Stream the latest movies, TV shows, and documentaries anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Movies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">TV Shows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Documentaries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">New & Popular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">My List</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Preferences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Legal Notices</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Manage Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Account Settings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Payment Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Subscription</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Redeem Gift Cards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 StreamFlix. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Service Code: 1-844-STREAM</span>
            <span>•</span>
            <span>Available in 190+ countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}