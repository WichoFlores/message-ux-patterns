
import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container-custom py-12 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">About This Project</h1>
        <Separator className="mb-6" />
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            This project is a comprehensive library of UX patterns for error messages, designed to help developers create
            more user-friendly error experiences across digital products.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Inspiration</h2>
          <p className="mb-4">
            This project was inspired by Andy Bell's excellent article:
          </p>
          <a 
            href="https://piccalil.li/blog/how-to-write-error-messages-that-actually-help-users-rather-than-frustrate-them/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6"
          >
            How to write error messages that actually help users, rather than frustrate them
            <ExternalLink className="h-4 w-4" />
          </a>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-4">
            We believe that well-crafted error messages can transform frustrating user experiences into helpful ones.
            This library aims to provide practical examples of error message patterns that:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Are clear, specific, and actionable</li>
            <li>Use human-friendly language</li>
            <li>Avoid technical jargon</li>
            <li>Provide clear next steps</li>
            <li>Maintain a consistent voice and tone</li>
            <li>Consider accessibility best practices</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How To Use This Library</h2>
          <p className="mb-4">
            Browse through our categorized examples of error messages to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Compare poor error messages with improved versions</li>
            <li>Understand the principles that make error messages effective</li>
            <li>Apply these patterns in your own applications</li>
            <li>Use our guidelines to create consistent error experiences</li>
          </ul>
          
          <p className="mt-8 text-slate-500 italic">
            We hope this resource helps you create more empathetic, helpful user experiences through
            better error messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
