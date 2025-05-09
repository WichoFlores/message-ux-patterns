
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ErrorCard from '@/components/ErrorCard';
import { Button } from '@/components/ui/button';
import { errorExamples } from '@/data/errorExamples';
import { errorCategories } from '@/data/errorCategories';
import { Search as SearchIcon } from 'lucide-react';

// Types for our search results
interface CategoryResult {
  id: string;
  title: string;
  description: string;
  type: 'category';
}

interface ErrorResult {
  id: string;
  title: string;
  context: string;
  type: 'error';
}

type SearchResult = CategoryResult | ErrorResult;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    
    // Search in categories
    const categoryResults = errorCategories
      .filter(category => 
        category.title.toLowerCase().includes(lowercaseQuery) || 
        category.description.toLowerCase().includes(lowercaseQuery))
      .map(category => ({
        id: category.id,
        title: category.title,
        description: category.description,
        type: 'category' as const
      }));
    
    // Search in error examples
    const errorResults = errorExamples
      .filter(error => 
        error.title.toLowerCase().includes(lowercaseQuery) || 
        error.context.toLowerCase().includes(lowercaseQuery) ||
        error.badExample.message.toLowerCase().includes(lowercaseQuery) ||
        error.goodExample.message.toLowerCase().includes(lowercaseQuery) ||
        error.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
      .map(error => ({
        id: error.id,
        title: error.title,
        context: error.context,
        type: 'error' as const
      }));
    
    // Combine and set results
    setResults([...categoryResults, ...errorResults]);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Results</h1>
            {query ? (
              <p className="text-lg text-muted-foreground">
                Showing results for "{query}"
              </p>
            ) : (
              <p className="text-lg text-muted-foreground">
                Enter a search term to find error examples and categories
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          {query && results.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <SearchIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No results found</h2>
              <p className="text-muted-foreground mb-8">
                We couldn't find anything for "{query}". Try checking your spelling or using different keywords.
              </p>
              <Button asChild>
                <Link to="/categories">Browse All Categories</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Category results */}
              {results.filter(result => result.type === 'category').length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results
                      .filter(result => result.type === 'category')
                      .map(result => {
                        const category = errorCategories.find(c => c.id === result.id);
                        if (!category) return null;
                        
                        const Icon = category.icon;
                        
                        return (
                          <Link 
                            to={`/category/${result.id}`}
                            key={result.id}
                            className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-4 mb-2">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <h3 className="text-xl font-medium">{result.title}</h3>
                            </div>
                            <p className="text-muted-foreground line-clamp-2">
                              {(result as CategoryResult).description}
                            </p>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Error examples results */}
              {results.filter(result => result.type === 'error').length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Error Examples</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results
                      .filter(result => result.type === 'error')
                      .map(result => {
                        const error = errorExamples.find(e => e.id === result.id);
                        if (!error) return null;
                        return <ErrorCard key={result.id} error={error} />;
                      })}
                  </div>
                </div>
              )}
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

export default Search;
