
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { errorCategories, ErrorCategory } from '@/data/errorCategories';
import { ChevronRight } from 'lucide-react';

interface CategoryGridProps {
  categories?: ErrorCategory[];
  className?: string;
}

const CategoryGrid = ({ categories = errorCategories, className = '' }: CategoryGridProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Card key={category.id} className="h-full flex flex-col transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className={`w-10 h-10 rounded-md flex items-center justify-center mb-3 ${category.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="flex items-center gap-2">
                <span>{category.emoji}</span>
                <span>{category.title}</span>
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Category content could go here */}
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm" className="ml-auto">
                <Link to={`/category/${category.id}`}>
                  Browse Examples
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  );
};

export default CategoryGrid;
