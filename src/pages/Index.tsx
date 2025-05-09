
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import CategoryGrid from '@/components/CategoryGrid';
import ErrorCard from '@/components/ErrorCard';
import { errorExamples } from '@/data/errorExamples';

const Index = () => {
  // Get a few featured error examples
  const featuredErrors = errorExamples.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="gradient-heading mb-6">Better Error Messages, Better UX</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              A collection of error message patterns and best practices for creating 
              user-friendly experiences when things go wrong.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/categories">Browse Error Categories</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/guidelines">UX Writing Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Error Categories</h2>
            <p className="text-lg text-muted-foreground">
              Explore different types of errors and learn best practices for handling each case.
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Examples */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Featured Examples</h2>
            <p className="text-lg text-muted-foreground">
              See the difference between poor and effective error messaging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredErrors.map((error) => (
              <ErrorCard key={error.id} error={error} showCategory={true} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/examples">View All Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Improve Your Error Messages Today</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Turn frustrating moments into helpful guidance with our error message best practices.
            </p>
            <Button size="lg" asChild>
              <Link to="/guidelines">Read the Guidelines</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-xl font-bold flex items-center gap-1.5">
                <span className="text-primary">Error</span>
                <span className="text-blue-600">Messages</span>
                <span className="text-sm font-normal text-muted-foreground ml-1">UX</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                A resource for better error handling in digital products.
              </p>
            </div>
            <div className="flex space-x-8">
              <div className="space-y-2">
                <h4 className="font-medium">Explore</h4>
                <ul className="space-y-1">
                  <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-primary">Categories</Link></li>
                  <li><Link to="/examples" className="text-sm text-muted-foreground hover:text-primary">Examples</Link></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Resources</h4>
                <ul className="space-y-1">
                  <li><Link to="/guidelines" className="text-sm text-muted-foreground hover:text-primary">UX Guidelines</Link></li>
                  <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-6">
            <p className="text-sm text-center text-muted-foreground">
              © {new Date().getFullYear()} Error Messages UX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
