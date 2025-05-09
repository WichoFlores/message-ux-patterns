
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryGrid from '@/components/CategoryGrid';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Error Categories</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our collection of common error types and discover best practices for handling each scenario.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <CategoryGrid className="mb-12" />
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link to="/guidelines">
                Read UX Writing Guidelines
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto">
        <div className="container-custom py-8">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Error Messages UX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
