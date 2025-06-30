import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MapPin,
  User,
  Bell,
  Search,
  Menu,
  X,
  Users,
  Trophy,
} from "lucide-react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const [userCount, setUserCount] = useState(24567);
  const [isOnline, setIsOnline] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate real-time user count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simulate search functionality
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const navItems = [
    { path: "/tournaments", label: "Tournaments", icon: Trophy },
    { path: "/about-us", label: "About Us", icon: Users },
    { path: "/contact-us", label: "Contact Us", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-playdate-background-light font-sans">
      {/* Online Status Indicator */}
      {!isOnline && (
        <div className="bg-red-500 text-white text-center py-2 text-sm">
          You're offline. Some features may not work properly.
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-playdate-nav-background h-20 flex items-center justify-between px-lg relative z-50">
        {/* Logo Section with Live User Count */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-12 w-12 bg-playdate-primary-blue rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              P
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-playdate-text-primary block">
                Playdate
              </span>
              <div className="flex items-center gap-1 text-xs text-playdate-text-secondary">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{userCount.toLocaleString()} online</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Enhanced Location Display */}
        <div className="hidden md:flex items-center gap-2 text-playdate-text-muted bg-white rounded-full px-4 py-2 shadow-sm">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">📍 Find games near you</span>
          <button
            className="text-playdate-primary-blue text-xs hover:underline"
            onClick={() => alert("Location feature coming soon!")}
          >
            Enable location
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-sm">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-colors relative"
            title="Search tournaments"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive(item.path)
                  ? "bg-playdate-primary-blue text-white shadow-lg"
                  : "text-playdate-text-primary hover:bg-gray-100 hover:scale-105"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}

          {/* Notification Bell */}
          <button className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-colors relative">
            <Bell className="h-5 w-5" />
            {hasNotifications && (
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
            )}
          </button>

          {/* User Profile */}
          <div className="relative group">
            <button className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-colors">
              <User className="h-5 w-5" />
            </button>
            {/* Quick Profile Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4">
                <div className="text-sm font-medium text-playdate-text-primary">
                  Welcome back!
                </div>
                <div className="text-xs text-playdate-text-secondary">
                  Ready to play?
                </div>
                <button className="w-full mt-2 bg-playdate-primary-blue text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 animate-in slide-in-from-top duration-300">
            <form onSubmit={handleSearchSubmit} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-5 w-5 text-playdate-text-secondary" />
                <input
                  type="text"
                  placeholder="Search tournaments, sports, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-playdate-text-secondary">
                  Popular searches:
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Basketball", "Tennis", "Soccer", "Weekend games"].map(
                    (term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearchQuery(term)}
                        className="px-3 py-1 bg-playdate-feature-background rounded-full text-sm hover:bg-playdate-card-blue-light transition-colors"
                      >
                        {term}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-30 pt-20">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-4 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-playdate-primary-blue text-white"
                    : "text-playdate-text-primary hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="border-t pt-4">
              <button className="w-full bg-playdate-primary-blue text-white py-3 px-4 rounded-lg font-medium">
                Sign In / Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-playdate-dark-navy text-white py-lg px-lg">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-lg mb-lg">
            <div>
              <div className="flex items-center mb-md">
                <div className="h-8 w-8 bg-playdate-primary-blue rounded-lg flex items-center justify-center text-white font-bold mr-2">
                  P
                </div>
                <span className="font-bold">Playdate</span>
              </div>
              <p className="text-sm text-gray-300 mb-md">
                Connecting athletes, building communities, creating legends.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">
                  {userCount.toLocaleString()} active players
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-md">Quick Links</h4>
              <div className="space-y-sm text-sm">
                <Link
                  to="/tournaments"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Find Tournaments
                </Link>
                <Link
                  to="/about-us"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  to="/contact-us"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-md">Support</h4>
              <div className="space-y-sm text-sm">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Community Guidelines
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Safety Tips
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-md">Stay Updated</h4>
              <p className="text-sm text-gray-300 mb-md">
                Get notified about new tournaments in your area
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 rounded-md text-sm"
                />
                <button className="bg-playdate-primary-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-lg flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-300 mb-md md:mb-0">
              © 2024 Playdate. All Rights Reserved. | Made with ❤️ for athletes
            </div>
            <div className="flex gap-md">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex gap-md">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  📘 Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  🐦 Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
