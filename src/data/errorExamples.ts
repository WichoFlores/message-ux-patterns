
export interface ErrorExample {
  id: string;
  categoryId: string;
  title: string;
  context: string;
  badExample: {
    message: string;
    explanation: string;
    image?: string;
  };
  goodExample: {
    message: string;
    explanation: string;
    image?: string;
  };
  whatMakesItBetter: string[];
  copyPattern: string;
  fixability: "user" | "system" | "both";
  tags: string[];
}

export const errorExamples: ErrorExample[] = [
  {
    id: "required-field",
    categoryId: "form-input",
    title: "Required Field Error",
    context: "User submits a form with an empty required field",
    badExample: {
      message: "Error: Field cannot be blank",
      explanation: "This message is too generic, doesn't specify which field has the error, and doesn't offer guidance on how to fix it.",
    },
    goodExample: {
      message: "Please enter your email address to continue",
      explanation: "This message clearly identifies which field needs attention and what action is required.",
    },
    whatMakesItBetter: [
      "Specifies exactly which field is missing",
      "Uses polite, conversational language",
      "Explains why the field is important (to continue)",
      "Avoids technical terms like 'Error' or 'Required'"
    ],
    copyPattern: "[Field name] is needed to [benefit/reason]",
    fixability: "user",
    tags: ["form", "required field", "validation"]
  },
  {
    id: "invalid-email",
    categoryId: "form-input",
    title: "Invalid Email Format",
    context: "User enters an email address without an @ symbol",
    badExample: {
      message: "Invalid format",
      explanation: "This message doesn't explain what's wrong or how to fix it. It uses technical language and provides no guidance.",
    },
    goodExample: {
      message: "This doesn't look like an email address. Please include an @ symbol, like name@example.com",
      explanation: "This message explains the issue clearly, provides an example of correct format, and uses conversational language.",
    },
    whatMakesItBetter: [
      "Specifically identifies the problem (missing @ symbol)",
      "Provides an example of correct format",
      "Uses conversational, non-technical language",
      "Doesn't blame the user"
    ],
    copyPattern: "This doesn't look like a [field type]. Please include [missing element], like [example]",
    fixability: "user",
    tags: ["form", "email", "format", "validation"]
  },
  {
    id: "404-not-found",
    categoryId: "navigation",
    title: "404 Page Not Found",
    context: "User navigates to a URL that doesn't exist",
    badExample: {
      message: "Error 404: Page not found",
      explanation: "This message uses technical jargon, doesn't explain what happened, and provides no recovery path.",
    },
    goodExample: {
      message: "We can't find the page you're looking for. It might have been moved or deleted. Try searching or head back to the homepage.",
      explanation: "This message explains the situation in human terms, suggests possible causes, and offers multiple ways to recover.",
    },
    whatMakesItBetter: [
      "Explains what happened in plain language",
      "Suggests possible reasons for the error",
      "Offers multiple recovery options (search or go to homepage)",
      "Avoids technical error codes in the main message"
    ],
    copyPattern: "We can't find [resource]. It might have [possible reasons]. Try [recovery option 1] or [recovery option 2].",
    fixability: "user",
    tags: ["navigation", "404", "not found"]
  },
  {
    id: "no-search-results",
    categoryId: "search",
    title: "No Search Results",
    context: "User searches for something that returns no results",
    badExample: {
      message: "No results found",
      explanation: "This message is abrupt, doesn't offer suggestions, and leaves the user at a dead end.",
    },
    goodExample: {
      message: "We couldn't find anything for 'gadget'. Try checking your spelling or using different keywords like 'device' or 'tool'.",
      explanation: "This message acknowledges the issue, shows the search term, offers suggestions for different search terms, and provides actionable next steps.",
    },
    whatMakesItBetter: [
      "Acknowledges the user's intent",
      "Shows what was searched for",
      "Suggests why results might be missing",
      "Offers alternative search terms",
      "Provides clear next steps"
    ],
    copyPattern: "We couldn't find anything for '[search term]'. Try [alternative approach 1] or [alternative approach 2].",
    fixability: "user",
    tags: ["search", "no results"]
  },
  {
    id: "connection-lost",
    categoryId: "connectivity",
    title: "Connection Lost",
    context: "User loses internet connection while using the app",
    badExample: {
      message: "Error: Connection failed",
      explanation: "This message doesn't explain what happened, why it happened, or what the user should do next.",
    },
    goodExample: {
      message: "You're offline. We'll save your work and try to reconnect automatically. You can also try checking your internet connection.",
      explanation: "This message clearly states what happened, reassures the user their work is safe, explains automatic recovery attempts, and suggests a manual fix.",
    },
    whatMakesItBetter: [
      "Clearly states the issue (offline)",
      "Reassures that data is safe",
      "Explains automatic recovery attempts",
      "Offers a manual solution",
      "Uses calm, reassuring language"
    ],
    copyPattern: "You're offline. We'll [automatic recovery action] and [additional automatic action]. You can also try [manual action].",
    fixability: "both",
    tags: ["connectivity", "offline", "network"]
  },
  {
    id: "payment-declined",
    categoryId: "payment",
    title: "Payment Card Declined",
    context: "User's payment card is declined during checkout",
    badExample: {
      message: "Transaction failed: Card declined",
      explanation: "This message is abrupt, doesn't explain possible reasons, and doesn't offer helpful next steps.",
    },
    goodExample: {
      message: "Your card was declined. This usually happens due to insufficient funds or temporary holds. Try another card or contact your bank for details.",
      explanation: "This message clearly explains what happened, provides possible reasons without assuming fault, and offers multiple recovery options.",
    },
    whatMakesItBetter: [
      "States the issue clearly",
      "Explains common reasons without assuming fault",
      "Offers multiple solutions",
      "Maintains privacy by not specifying the exact reason",
      "Uses neutral language that doesn't blame the user"
    ],
    copyPattern: "Your [payment method] was declined. This usually happens due to [possible reason 1] or [possible reason 2]. Try [solution 1] or [solution 2].",
    fixability: "both",
    tags: ["payment", "checkout", "declined"]
  },
  {
    id: "file-too-large",
    categoryId: "file-upload",
    title: "File Too Large",
    context: "User attempts to upload a file that exceeds size limits",
    badExample: {
      message: "Error: Maximum file size exceeded",
      explanation: "This message doesn't specify the actual size limit or offer solutions for uploading large files.",
    },
    goodExample: {
      message: "This file is 15MB, but the maximum size is 5MB. Try compressing the file or splitting it into smaller parts.",
      explanation: "This message clearly states the current file size and the limit, then offers specific solutions to help the user succeed.",
    },
    whatMakesItBetter: [
      "Shows the actual file size and the limit",
      "Offers specific solutions (compression, splitting)",
      "Uses straightforward language",
      "Focuses on solutions rather than the error"
    ],
    copyPattern: "This file is [current size], but the maximum size is [size limit]. Try [solution 1] or [solution 2].",
    fixability: "user",
    tags: ["upload", "file size", "limits"]
  },
];
