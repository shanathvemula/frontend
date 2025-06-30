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

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

  const isActive = (path: string) => location.pathname === path;

  const handleSearchSubmit = (e: React.FormEvent) => {
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
    <>
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -30px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shake {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }
          20%,
          80% {
            transform: translate3d(2px, 0, 0);
          }
          30%,
          50%,
          70% {
            transform: translate3d(-4px, 0, 0);
          }
          40%,
          60% {
            transform: translate3d(4px, 0, 0);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-shake {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .hover-bounce:hover {
          animation: bounce 1s infinite;
        }
        .hover-wiggle:hover {
          animation: wiggle 0.5s infinite;
        }
        .hover-shake:hover {
          animation: shake 0.5s infinite;
        }
      `}</style>

      <div className="min-h-screen bg-playdate-background-light font-sans">
        {/* Online Status Indicator */}
        {!isOnline && (
          <div className="bg-red-500 text-white text-center py-2 text-sm animate-slideInDown">
            You're offline. Some features may not work properly.
          </div>
        )}

        {/* Navigation Bar */}
        <nav className="bg-playdate-nav-background h-20 flex items-center justify-between px-lg relative z-50 animate-slideInDown">
          {/* Logo Section with Live User Count */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="h-12 w-12 bg-playdate-primary-blue rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 hover-bounce">
                P
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-playdate-text-primary block hover-wiggle">
                  Playdate
                </span>
                <div className="flex items-center gap-1 text-xs text-playdate-text-secondary">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="animate-fadeIn">
                    {userCount.toLocaleString()} online
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Enhanced Location Display */}
          <div className="hidden md:flex items-center gap-2 text-playdate-text-muted bg-white rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <MapPin className="h-4 w-4 animate-bounce" />
            <span className="text-sm">📍 Find games near you</span>
            <button
              className="text-playdate-primary-blue text-xs hover:underline hover-wiggle"
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
              className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-all duration-300 relative hover:scale-110 hover-bounce"
              title="Search tournaments"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover-bounce ${
                  isActive(item.path)
                    ? "bg-playdate-primary-blue text-white shadow-lg animate-pulse"
                    : "text-playdate-text-primary hover:bg-gray-100"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-4 w-4 animate-bounce" />
                {item.label}
              </Link>
            ))}

            {/* Notification Bell */}
            <button className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-all duration-300 relative hover:scale-110 hover-shake">
              <Bell className="h-5 w-5 animate-wiggle" />
              {hasNotifications && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
              )}
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover-bounce">
                <User className="h-5 w-5" />
              </button>
              {/* Quick Profile Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 animate-slideInUp">
                <div className="p-4">
                  <div className="text-sm font-medium text-playdate-text-primary animate-fadeIn">
                    Welcome back!
                  </div>
                  <div className="text-xs text-playdate-text-secondary animate-fadeIn">
                    Ready to play?
                  </div>
                  <button className="w-full mt-2 bg-playdate-primary-blue text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-bounce">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-playdate-text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover-wiggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-spin" />
            ) : (
              <Menu className="h-6 w-6 animate-bounce" />
            )}
          </button>
        </nav>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-center pt-20 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 animate-slideInUp">
              <form onSubmit={handleSearchSubmit} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-5 w-5 text-playdate-text-secondary animate-bounce" />
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
                    className="p-1 rounded-md hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover-wiggle"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-playdate-text-secondary animate-fadeIn">
                    Popular searches:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Basketball", "Tennis", "Soccer", "Weekend games"].map(
                      (term, index) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1 bg-playdate-feature-background rounded-full text-sm hover:bg-playdate-card-blue-light transition-all duration-300 hover:scale-105 animate-fadeIn hover-bounce"
                          style={{ animationDelay: `${index * 100}ms` }}
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
          <div className="md:hidden fixed inset-0 bg-white z-30 pt-20 animate-slideInDown">
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 animate-slideInUp hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-playdate-primary-blue text-white animate-pulse"
                      : "text-playdate-text-primary hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-5 w-5 animate-bounce" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <div className="border-t pt-4">
                <button className="w-full bg-playdate-primary-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-bounce">
                  Sign In / Join
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="animate-fadeIn">{children}</main>

        {/* Enhanced Footer */}
        <footer className="bg-playdate-dark-navy text-white py-lg px-lg animate-slideInUp">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content */}
            <div className="grid md:grid-cols-4 gap-lg mb-lg">
              <div className="animate-fadeIn">
                <div className="flex items-center mb-md">
                  <div className="h-8 w-8 bg-playdate-primary-blue rounded-lg flex items-center justify-center text-white font-bold mr-2 hover-bounce">
                    P
                  </div>
                  <span className="font-bold hover-wiggle">Playdate</span>
                </div>
                <p className="text-sm text-gray-300 mb-md">
                  Connecting athletes, building communities, creating legends.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    {userCount.toLocaleString()} active players
                  </span>
                </div>
              </div>

              <div
                className="animate-fadeIn"
                style={{ animationDelay: "200ms" }}
              >
                <h4 className="font-bold mb-md hover-shake">Quick Links</h4>
                <div className="space-y-sm text-sm">
                  <Link
                    to="/tournaments"
                    className="block text-gray-300 hover:text-white transition-colors hover:scale-105 hover-bounce"
                  >
                    Find Tournaments
                  </Link>
                  <Link
                    to="/about-us"
                    className="block text-gray-300 hover:text-white transition-colors hover:scale-105 hover-bounce"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block text-gray-300 hover:text-white transition-colors hover:scale-105 hover-bounce"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div
                className="animate-fadeIn"
                style={{ animationDelay: "400ms" }}
              >
                <h4 className="font-bold mb-md hover-shake">Support</h4>
                <div className="space-y-sm text-sm">
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover-bounce"
                  >
                    Help Center
                  </a>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover-bounce"
                  >
                    Community Guidelines
                  </a>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover-bounce"
                  >
                    Safety Tips
                  </a>
                </div>
              </div>

              <div
                className="animate-fadeIn"
                style={{ animationDelay: "600ms" }}
              >
                <h4 className="font-bold mb-md hover-shake">Stay Updated</h4>
                <p className="text-sm text-gray-300 mb-md">
                  Get notified about new tournaments in your area
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 rounded-md text-sm focus:bg-white/20 transition-all duration-300"
                  />
                  <button className="bg-playdate-primary-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-bounce">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-lg flex flex-col md:flex-row items-center justify-between animate-fadeIn">
              <div className="text-sm text-gray-300 mb-md md:mb-0">
                © 2024 Playdate. All Rights Reserved. | Made with ❤️ for
                athletes
              </div>
              <div className="flex gap-md">
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover-bounce"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover-bounce"
                >
                  Terms of Service
                </a>
                <div className="flex gap-md">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover-bounce"
                  >
                    📘 Facebook
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover-bounce"
                  >
                    🐦 Twitter
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover-bounce"
                  >
                    📸 Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
