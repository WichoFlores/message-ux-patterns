
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-1.5">
            <span className="text-primary">Error</span>
            <span className="text-blue-600">Messages</span>
            <span className="text-sm font-normal text-muted-foreground ml-1">UX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/guidelines" className="text-sm font-medium hover:text-primary transition-colors">UX Guidelines</Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">Error Categories</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
        </nav>

        {/* Search (Desktop) */}
        <form onSubmit={handleSearchSubmit} className="relative hidden md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search error patterns..."
              className="w-[200px] pl-9"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container-custom py-4 space-y-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search error patterns..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/guidelines" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>UX Guidelines</Link>
              <Link to="/categories" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Error Categories</Link>
              <Link to="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
