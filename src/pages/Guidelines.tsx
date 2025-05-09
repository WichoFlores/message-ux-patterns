
import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  MessageSquare,
  AlertCircle,
  CheckCircle,
  XCircle,
  Type,
  ArrowRight,
  FileText,
  EyeOff,
  Zap
} from 'lucide-react';

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="gradient-heading mb-6">UX Writing Guidelines for Error Messages</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Best practices for crafting error messages that help users recover and continue their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Card */}
            <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Core Principles for Error Messages</h2>
                    <p className="text-muted-foreground">
                      Effective error messages can turn a moment of user frustration into a helpful experience.
                      Follow these core principles to guide and support your users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidelines Accordion */}
            <Accordion type="single" collapsible className="space-y-6">
              
              {/* Guideline 1 */}
              <AccordionItem value="item-1" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Be Human and Conversational</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <Card className="bad-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-bad" />
                          <h4 className="text-sm font-bold text-bad mb-0">Instead of this</h4>
                        </div>
                        <p className="text-sm mt-2">"Error 404: Requested resource not found."</p>
                      </CardContent>
                    </Card>
                    <Card className="good-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-good" />
                          <h4 className="text-sm font-bold text-good mb-0">Use this</h4>
                        </div>
                        <p className="text-sm mt-2">"We can't find the page you're looking for. It might have moved or been renamed."</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Use natural language that a person would actually say. Avoid technical jargon or system-oriented language
                    that focuses on what went wrong from a technical perspective.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Guideline 2 */}
              <AccordionItem value="item-2" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Be Specific and Clear</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <Card className="bad-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-bad" />
                          <h4 className="text-sm font-bold text-bad mb-0">Instead of this</h4>
                        </div>
                        <p className="text-sm mt-2">"Invalid input."</p>
                      </CardContent>
                    </Card>
                    <Card className="good-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-good" />
                          <h4 className="text-sm font-bold text-good mb-0">Use this</h4>
                        </div>
                        <p className="text-sm mt-2">"Please enter a phone number with 10 digits, like (555) 555-1234."</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Tell users exactly what went wrong and how to fix it. Vague error messages force users
                    to guess what the problem might be, leading to frustration and repeated errors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Guideline 3 */}
              <AccordionItem value="item-3" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Type className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Use Active Voice</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <Card className="bad-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-bad" />
                          <h4 className="text-sm font-bold text-bad mb-0">Instead of this</h4>
                        </div>
                        <p className="text-sm mt-2">"Your password has been entered incorrectly."</p>
                      </CardContent>
                    </Card>
                    <Card className="good-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-good" />
                          <h4 className="text-sm font-bold text-good mb-0">Use this</h4>
                        </div>
                        <p className="text-sm mt-2">"The password you entered doesn't match our records. Please try again."</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Active voice makes messages clearer and more direct. It also avoids sounding accusatory by
                    focusing on the action rather than the person who performed it.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Guideline 4 */}
              <AccordionItem value="item-4" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Offer a Solution</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <Card className="bad-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-bad" />
                          <h4 className="text-sm font-bold text-bad mb-0">Instead of this</h4>
                        </div>
                        <p className="text-sm mt-2">"Payment failed."</p>
                      </CardContent>
                    </Card>
                    <Card className="good-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-good" />
                          <h4 className="text-sm font-bold text-good mb-0">Use this</h4>
                        </div>
                        <p className="text-sm mt-2">"We couldn't process your payment. Please check your card details or try a different payment method."</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Always include guidance on how to resolve the issue. Give users a clear path forward,
                    whether it's retrying with different input, contacting support, or using an alternative approach.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Guideline 5 */}
              <AccordionItem value="item-5" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-100 p-2 rounded-full">
                      <EyeOff className="h-5 w-5 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Be Considerate with Humor</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <Card className="bad-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-bad" />
                          <h4 className="text-sm font-bold text-bad mb-0">Instead of this</h4>
                        </div>
                        <p className="text-sm mt-2">"Oops! You broke the internet! 🤪"</p>
                      </CardContent>
                    </Card>
                    <Card className="good-example">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-good" />
                          <h4 className="text-sm font-bold text-good mb-0">Use this</h4>
                        </div>
                        <p className="text-sm mt-2">"We're having trouble connecting to the server. Please check your internet connection and try again."</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    While humor can sometimes lighten the mood, it can also come across as flippant when users are trying to complete important tasks.
                    Be especially careful with humor in error situations that might cause real user stress or concern.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Visual Cues Section */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-sky-100 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold">Visual Cues Best Practices</h3>
              </div>

              <p className="mb-4">
                Error messages should be visually distinct but not alarming. Use color, icons, and placement to make errors noticeable
                without creating unnecessary anxiety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <Card className="bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <span className="text-red-500 text-lg font-bold">A</span>
                    </div>
                    <p className="text-sm font-medium">Use red sparingly and purposefully</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">Position errors close to relevant fields</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <Type className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">Use consistent styling for all errors</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">Ensure accessibility contrast requirements</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Template Section */}
            <Collapsible className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-4 justify-between">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Error Message Template</h3>
                    <p className="text-sm text-muted-foreground mt-1">A complete error message formula to use in your UX writing</p>
                  </div>
                </div>
                <CollapsibleTrigger className="rounded-full p-2 hover:bg-slate-100">
                  <ArrowRight className="h-5 w-5 transition-transform" />
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent className="mt-4">
                <p>A complete error message should generally include these elements:</p>
                <ol className="mt-4 space-y-2 ml-6 list-decimal">
                  <li><strong>What happened</strong> - Clearly state the error in plain language</li>
                  <li><strong>Why it happened</strong> - Provide context (when it's helpful and not technical)</li>
                  <li><strong>How to fix it</strong> - Give specific guidance on next steps</li>
                </ol>

                <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-200">
                  <h4 className="font-medium mb-2">Example Template</h4>
                  <p className="mb-4">
                    <strong>[What happened].</strong> This usually happens because <strong>[why it happened]</strong>. 
                    Try <strong>[how to fix it]</strong>.
                  </p>
                  <div className="p-4 bg-white rounded-md border shadow-sm">
                    <p className="text-sm">
                      "We couldn't save your changes. This usually happens because of a temporary connection issue. 
                      Try saving again or check your internet connection."
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
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

export default Guidelines;
