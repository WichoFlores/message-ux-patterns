
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ErrorExample } from '@/data/errorExamples';
import { ChevronRight } from 'lucide-react';

interface ErrorCardProps {
  error: ErrorExample;
  showCategory?: boolean;
}

const ErrorCard = ({ error, showCategory = false }: ErrorCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{error.title}</CardTitle>
          {error.fixability && (
            <Badge variant={error.fixability === 'user' ? 'outline' : 'secondary'}>
              {error.fixability === 'user' ? 'User fixable' : 
               error.fixability === 'system' ? 'System fixable' : 'Both'}
            </Badge>
          )}
        </div>
        <CardDescription>{error.context}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <div className="space-y-4">
          <div className="bad-example">
            <div className="flex items-center mb-2">
              <span className="label-bad mr-2">Bad Example</span>
            </div>
            <p className="text-sm font-medium">{error.badExample.message}</p>
          </div>
          
          <div className="good-example">
            <div className="flex items-center mb-2">
              <span className="label-good mr-2">Good Example</span>
            </div>
            <p className="text-sm font-medium">{error.goodExample.message}</p>
          </div>
          
          {showCategory && (
            <div className="mt-4">
              <Badge variant="outline" className="text-xs">
                {error.categoryId.replace('-', ' ')}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" size="sm" asChild className="ml-auto">
          <Link to={`/error/${error.id}`}>
            View Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
