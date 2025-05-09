
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ErrorCard from '@/components/ErrorCard';
import { Button } from '@/components/ui/button';
import { errorCategories } from '@/data/errorCategories';
import { errorExamples } from '@/data/errorExamples';
import { ArrowLeft } from 'lucide-react';

const ErrorCategory = () => {
  const { id } = useParams<{ id: string }>();
  const category = errorCategories.find((cat) => cat.id === id);
  
  const categoryErrors = errorExamples.filter(
    (error) => error.categoryId === id
  );

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container-custom flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            We couldn't find the category you're looking for.
          </p>
          <Button asChild>
            <Link to="/categories">Browse All Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Category Header */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to="/categories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="mr-2">{category.emoji}</span>
                {category.title}
              </h1>
            </div>
            
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Examples */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Error Examples</h2>
          
          {categoryErrors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryErrors.map((error) => (
                <ErrorCard key={error.id} error={error} />
              ))}
            </div>
          ) : (
            <div className="bg-muted/50 rounded-lg p-12 text-center">
              <h3 className="text-xl font-medium mb-2">No examples yet</h3>
              <p className="text-muted-foreground mb-6">
                We're working on adding examples for this category.
              </p>
              <Button asChild>
                <Link to="/categories">Browse Other Categories</Link>
              </Button>
            </div>
          )}
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

export default ErrorCategory;
