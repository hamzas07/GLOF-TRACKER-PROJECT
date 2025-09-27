import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Mountain, 
  Menu, 
  X, 
  ChevronDown,
  Home, 
  MapPin, 
  Users, 
  Heart, 
  FileText, 
  Shield, 
  BarChart3,
  Phone,
  Mail,
  Info
} from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviceItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Live Dashboard", href: "/dashboard", icon: MapPin },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Organizations", href: "/organizations", icon: Users },
    { name: "Donations", href: "/donations", icon: Heart },
    { name: "Gov Resources", href: "/government", icon: FileText },
    { name: "Safety Guide", href: "/safety", icon: Shield },
    { name: "Emergency", href: "/emergency", icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Mountain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">GLOF</span>
              <span className="text-sm text-muted-foreground block -mt-1">Tracker</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          to={item.href}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`flex items-center space-x-3 px-4 py-2 hover:bg-accent text-sm ${
                            isActive(item.href) ? 'bg-accent text-accent-foreground' : 'text-foreground'
                          }`}>
                            <Icon className="h-4 w-4" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </Button>
            </Link>

            {/* About Us */}
            <Link to="/about">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </Button>
            </Link>

            {/* Login Button */}
            <Link to="/login">
              <Button variant="hero" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-card border-t border-border">
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Services</div>
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className="w-full justify-start space-x-2"
                      size="sm"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Contact & About */}
            <div className="border-t border-border pt-2 space-y-1">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start space-x-2" size="sm">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </Button>
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start space-x-2" size="sm">
                  <Info className="h-4 w-4" />
                  <span>About Us</span>
                </Button>
              </Link>
            </div>
            
            {/* Mobile Login */}
            <div className="border-t border-border pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="w-full">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;