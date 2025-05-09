
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { errorExamples } from '@/data/errorExamples';
import { errorCategories } from '@/data/errorCategories';

const ErrorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const error = errorExamples.find((error) => error.id === id);
  
  if (!error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container-custom py-16 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Error Example Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the error example you're looking for.</p>
          <Button asChild>
            <Link to="/categories">Browse All Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  const category = errorCategories.find((cat) => cat.id === error.categoryId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Error Header */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
        <div className="container-custom py-12">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to={`/category/${error.categoryId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {category?.title || 'Category'}
            </Link>
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold">{error.title}</h1>
              <Badge variant={error.fixability === 'user' ? 'outline' : 'secondary'}>
                {error.fixability === 'user' ? 'User fixable' : 
                error.fixability === 'system' ? 'System fixable' : 'Both'}
              </Badge>
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">{error.context}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {error.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-background">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Error Examples */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bad Example */}
            <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-destructive" />
                <h2 className="text-xl font-semibold">Bad Example</h2>
              </div>
              <div className="bg-white rounded-md p-4 mb-4 border shadow-sm">
                <p className="font-medium">{error.badExample.message}</p>
              </div>
              <p className="text-muted-foreground">{error.badExample.explanation}</p>
              {error.badExample.image && (
                <div className="mt-4">
                  <img 
                    src={error.badExample.image} 
                    alt="Bad example illustration" 
                    className="rounded-md border"
                  />
                </div>
              )}
            </div>
            
            {/* Good Example - Now using green colors */}
            <div className="bg-good-light rounded-lg p-6 border border-good/20">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-good-dark" />
                <h2 className="text-xl font-semibold">Good Example</h2>
              </div>
              <div className="bg-white rounded-md p-4 mb-4 border shadow-sm">
                <p className="font-medium">{error.goodExample.message}</p>
              </div>
              <p className="text-muted-foreground">{error.goodExample.explanation}</p>
              {error.goodExample.image && (
                <div className="mt-4">
                  <img 
                    src={error.goodExample.image} 
                    alt="Good example illustration" 
                    className="rounded-md border"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* What Makes It Better */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Makes It Better</h2>
            <ul className="list-disc pl-5 space-y-2">
              {error.whatMakesItBetter.map((point, index) => (
                <li key={index} className="text-lg">{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Copy Pattern */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Reusable Copy Pattern</h2>
            <div className="bg-muted/40 rounded-md p-6 border">
              <p className="text-lg font-mono">{error.copyPattern}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related or next steps */}
      <section className="py-8 bg-muted/20 border-t">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline">
              <Link to={`/category/${error.categoryId}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {category?.title || 'Category'}
              </Link>
            </Button>
            <Button asChild>
              <Link to="/guidelines">Read UX Guidelines</Link>
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

export default ErrorDetails;
