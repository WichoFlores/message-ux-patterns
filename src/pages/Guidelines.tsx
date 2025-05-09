
import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-secondary/20 border-b">
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
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none">
              <h2>Core Principles for Error Messages</h2>
              <p>
                Effective error messages can turn a moment of user frustration into a helpful experience.
                Follow these core principles to create error messages that guide and support your users.
              </p>

              <h3>1. Be Human and Conversational</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bad-example border-bad">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-bad mb-2">❌ Instead of this</h4>
                    <p className="text-sm">"Error 404: Requested resource not found."</p>
                  </CardContent>
                </Card>
                <Card className="good-example border-good">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-good mb-2">✓ Use this</h4>
                    <p className="text-sm">"We can't find the page you're looking for. It might have moved or been renamed."</p>
                  </CardContent>
                </Card>
              </div>
              <p>
                Use natural language that a person would actually say. Avoid technical jargon or system-oriented language
                that focuses on what went wrong from a technical perspective.
              </p>

              <Separator className="my-10" />

              <h3>2. Be Specific and Clear</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bad-example border-bad">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-bad mb-2">❌ Instead of this</h4>
                    <p className="text-sm">"Invalid input."</p>
                  </CardContent>
                </Card>
                <Card className="good-example border-good">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-good mb-2">✓ Use this</h4>
                    <p className="text-sm">"Please enter a phone number with 10 digits, like (555) 555-1234."</p>
                  </CardContent>
                </Card>
              </div>
              <p>
                Tell users exactly what went wrong and how to fix it. Vague error messages force users
                to guess what the problem might be, leading to frustration and repeated errors.
              </p>

              <Separator className="my-10" />

              <h3>3. Use Active Voice</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bad-example border-bad">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-bad mb-2">❌ Instead of this</h4>
                    <p className="text-sm">"Your password has been entered incorrectly."</p>
                  </CardContent>
                </Card>
                <Card className="good-example border-good">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-good mb-2">✓ Use this</h4>
                    <p className="text-sm">"The password you entered doesn't match our records. Please try again."</p>
                  </CardContent>
                </Card>
              </div>
              <p>
                Active voice makes messages clearer and more direct. It also avoids sounding accusatory by
                focusing on the action rather than the person who performed it.
              </p>

              <Separator className="my-10" />

              <h3>4. Offer a Solution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bad-example border-bad">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-bad mb-2">❌ Instead of this</h4>
                    <p className="text-sm">"Payment failed."</p>
                  </CardContent>
                </Card>
                <Card className="good-example border-good">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-good mb-2">✓ Use this</h4>
                    <p className="text-sm">"We couldn't process your payment. Please check your card details or try a different payment method."</p>
                  </CardContent>
                </Card>
              </div>
              <p>
                Always include guidance on how to resolve the issue. Give users a clear path forward,
                whether it's retrying with different input, contacting support, or using an alternative approach.
              </p>

              <Separator className="my-10" />

              <h3>5. Be Considerate with Humor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bad-example border-bad">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-bad mb-2">❌ Instead of this</h4>
                    <p className="text-sm">"Oops! You broke the internet! 🤪"</p>
                  </CardContent>
                </Card>
                <Card className="good-example border-good">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-bold text-good mb-2">✓ Use this</h4>
                    <p className="text-sm">"We're having trouble connecting to the server. Please check your internet connection and try again."</p>
                  </CardContent>
                </Card>
              </div>
              <p>
                While humor can sometimes lighten the mood, it can also come across as flippant when users are trying to complete important tasks.
                Be especially careful with humor in error situations that might cause real user stress or concern.
              </p>

              <Separator className="my-10" />

              <h3>6. Use Visual Cues Appropriately</h3>
              <p>
                Error messages should be visually distinct but not alarming. Use color, icons, and placement to make errors noticeable
                without creating unnecessary anxiety.
              </p>
              <ul>
                <li>Use red sparingly and purposefully</li>
                <li>Position error messages close to the relevant field or action</li>
                <li>Use consistent styling for all error messages</li>
                <li>Make sure error states meet accessibility contrast requirements</li>
              </ul>

              <Separator className="my-10" />

              <h3>Error Message Template</h3>
              <p>A complete error message should generally include these elements:</p>
              <ol>
                <li><strong>What happened</strong> - Clearly state the error in plain language</li>
                <li><strong>Why it happened</strong> - Provide context (when it's helpful and not technical)</li>
                <li><strong>How to fix it</strong> - Give specific guidance on next steps</li>
              </ol>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-medium mb-2">Example Template</h4>
                <p className="mb-4">
                  <strong>[What happened].</strong> This usually happens because <strong>[why it happened]</strong>. 
                  Try <strong>[how to fix it]</strong>.
                </p>
                <p className="text-sm text-muted-foreground">
                  "We couldn't save your changes. This usually happens because of a temporary connection issue. 
                  Try saving again or check your internet connection."
                </p>
              </div>
            </div>
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
