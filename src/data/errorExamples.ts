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
  {
    id: "unsupported-file-type",
    categoryId: "file-upload",
    title: "Unsupported File Type",
    context: "User attempts to upload a file with an unsupported format",
    badExample: {
      message: "Invalid file type",
      explanation: "This message is too vague, doesn't specify which file types are supported, and doesn't guide the user on how to proceed.",
    },
    goodExample: {
      message: "This file type (.exe) isn't supported. Please upload a JPG, PNG, or PDF file instead.",
      explanation: "This message clearly states which file type was rejected and provides specific alternatives that are accepted.",
    },
    whatMakesItBetter: [
      "Identifies the specific unsupported file type",
      "Lists the file formats that are accepted",
      "Provides a clear path forward",
      "Uses straightforward, non-technical language"
    ],
    copyPattern: "This file type ([file type]) isn't supported. Please upload [supported format 1], [supported format 2], or [supported format 3] instead.",
    fixability: "user",
    tags: ["upload", "file type", "format"]
  },
  {
    id: "upload-failed",
    categoryId: "file-upload",
    title: "Upload Failed",
    context: "File upload fails due to a server or network issue",
    badExample: {
      message: "Upload error occurred",
      explanation: "This message doesn't explain what happened or provide any recovery options.",
    },
    goodExample: {
      message: "Your file couldn't be uploaded due to a temporary network issue. Please try again or save your work and come back later.",
      explanation: "This message explains what happened, suggests it's temporary, and provides multiple options to recover.",
    },
    whatMakesItBetter: [
      "Explains the specific cause of the failure",
      "Suggests the issue is temporary, reducing user concern",
      "Provides multiple recovery options",
      "Uses reassuring language"
    ],
    copyPattern: "Your [item] couldn't be [action] due to [reason]. Please try again or [alternative action].",
    fixability: "both",
    tags: ["upload", "network", "server"]
  },
  {
    id: "incorrect-password",
    categoryId: "authentication",
    title: "Incorrect Password",
    context: "User enters the wrong password during login",
    badExample: {
      message: "Authentication failed",
      explanation: "This message uses technical jargon and doesn't specify if the username or password is incorrect.",
    },
    goodExample: {
      message: "The password you entered doesn't match our records. Please try again or reset your password if you've forgotten it.",
      explanation: "This message clearly states that the password is incorrect and offers a solution for users who have forgotten their password.",
    },
    whatMakesItBetter: [
      "Specifies that the password is the issue (not the username/email)",
      "Offers a path to recovery (password reset)",
      "Uses conversational language",
      "Avoids negative terms like 'wrong' or 'invalid'"
    ],
    copyPattern: "The password you entered doesn't match our records. Please try again or [recovery option].",
    fixability: "user",
    tags: ["authentication", "password", "login"]
  },
  {
    id: "account-locked",
    categoryId: "authentication",
    title: "Account Locked",
    context: "User's account is temporarily locked after multiple failed login attempts",
    badExample: {
      message: "Account locked. Try again later.",
      explanation: "This message doesn't explain why the account is locked, how long it will remain locked, or what the user can do in the meantime.",
    },
    goodExample: {
      message: "For your security, your account has been temporarily locked after multiple unsuccessful login attempts. You can try again in 30 minutes or reset your password now.",
      explanation: "This message explains why the account was locked, how long the lock will last, and provides an immediate alternative action.",
    },
    whatMakesItBetter: [
      "Explains why the account is locked (security reason)",
      "Specifies exactly how long the user needs to wait",
      "Offers an immediate alternative (password reset)",
      "Frames the lock as a security measure, not a punishment"
    ],
    copyPattern: "For your security, your [resource] has been temporarily [status] after [trigger]. You can try again in [timeframe] or [alternative action] now.",
    fixability: "user",
    tags: ["authentication", "security", "account"]
  },
  {
    id: "session-expired",
    categoryId: "authentication",
    title: "Session Expired",
    context: "User's login session has timed out due to inactivity",
    badExample: {
      message: "Session expired. Please login again.",
      explanation: "This message doesn't explain why the session expired or reassure the user about their data.",
    },
    goodExample: {
      message: "Your session has expired for security reasons. We've saved your progress. Please sign in again to continue.",
      explanation: "This message explains why the session expired, reassures that work is saved, and clearly states what to do next.",
    },
    whatMakesItBetter: [
      "Explains the reason for expiration (security)",
      "Reassures that progress is saved",
      "Clearly states the next step",
      "Uses 'sign in' instead of technical terms like 'authenticate'"
    ],
    copyPattern: "Your session has expired for security reasons. We've saved your [data type]. Please sign in again to continue.",
    fixability: "user",
    tags: ["authentication", "session", "timeout"]
  },
  {
    id: "empty-search",
    categoryId: "search",
    title: "Empty Search Query",
    context: "User submits a search with an empty query",
    badExample: {
      message: "Search term required",
      explanation: "This message is abrupt and doesn't guide the user on what to do next.",
    },
    goodExample: {
      message: "Please enter what you're looking for to search. Try keywords like 'shoes', 'dresses', or 'accessories'.",
      explanation: "This message explains what to do and provides helpful examples of search terms.",
    },
    whatMakesItBetter: [
      "Clearly explains what is needed",
      "Provides specific examples of search terms",
      "Uses friendly, conversational tone",
      "Frames as a helpful instruction rather than an error"
    ],
    copyPattern: "Please enter what you're looking for to search. Try keywords like '[example 1]', '[example 2]', or '[example 3]'.",
    fixability: "user",
    tags: ["search", "empty", "query"]
  },
  {
    id: "too-many-filters",
    categoryId: "search",
    title: "Too Many Filters",
    context: "User applies so many search filters that no results can match all criteria",
    badExample: {
      message: "No results for your filter combination",
      explanation: "This message doesn't explain why there are no results or how to adjust filters to get results.",
    },
    goodExample: {
      message: "Your combined filters are too specific (3 filters applied). Try removing some filters to see more products. We recommend keeping 'blue' but removing 'under $50'.",
      explanation: "This message explains why there are no results, shows how many filters are applied, and suggests specific filters to remove.",
    },
    whatMakesItBetter: [
      "Explains why there are no results (too many specific filters)",
      "Shows exactly how many filters are currently applied",
      "Recommends specific filters to keep or remove",
      "Offers clear guidance on how to get results"
    ],
    copyPattern: "Your combined filters are too specific ([number] filters applied). Try removing some filters to see more [items]. We recommend keeping '[important filter]' but removing '[less important filter]'.",
    fixability: "user",
    tags: ["search", "filters", "no results"]
  },
  {
    id: "server-error",
    categoryId: "system",
    title: "Server Error",
    context: "A server-side error occurs that prevents the requested action",
    badExample: {
      message: "Error 500: Internal Server Error",
      explanation: "This message uses technical jargon, doesn't explain what happened, and provides no path forward.",
    },
    goodExample: {
      message: "Something went wrong on our end. Our team has been notified and is working on it. Please try again in a few minutes or contact support if the issue persists.",
      explanation: "This message takes responsibility, reassures that the team is aware, and provides clear next steps.",
    },
    whatMakesItBetter: [
      "Takes ownership of the error ('on our end')",
      "Reassures that action is being taken",
      "Provides a timeframe for retry",
      "Offers an alternative (contact support) if the issue continues",
      "Avoids technical error codes in the main message"
    ],
    copyPattern: "Something went wrong on our end. Our team has been notified and is working on it. Please try again in [timeframe] or [alternative action] if the issue persists.",
    fixability: "system",
    tags: ["system", "server", "backend"]
  },
  {
    id: "maintenance-downtime",
    categoryId: "system",
    title: "Scheduled Maintenance",
    context: "System is temporarily unavailable due to scheduled maintenance",
    badExample: {
      message: "System unavailable",
      explanation: "This message doesn't explain why the system is down or when it will be back up.",
    },
    goodExample: {
      message: "We're currently performing scheduled maintenance to improve our service (May 9, 1-3 AM EST). We'll be back online by 3 AM EST. Thanks for your patience!",
      explanation: "This message explains the reason for downtime, provides exact timing, and thanks the user for their patience.",
    },
    whatMakesItBetter: [
      "Explains the purpose of the maintenance (improvement)",
      "Provides exact timing with timezone",
      "Sets clear expectations for when service will return",
      "Thanks users for their patience",
      "Frames downtime positively (for improvements)"
    ],
    copyPattern: "We're currently performing scheduled maintenance to improve our service ([date/time] [timezone]). We'll be back online by [end time] [timezone]. Thanks for your patience!",
    fixability: "system",
    tags: ["system", "maintenance", "downtime"]
  },
  {
    id: "permission-denied",
    categoryId: "access",
    title: "Permission Denied",
    context: "User attempts to access content they don't have permission for",
    badExample: {
      message: "Access denied. Insufficient privileges.",
      explanation: "This message uses technical language, doesn't explain why access is denied, and doesn't suggest how to gain access.",
    },
    goodExample: {
      message: "You don't have access to this document. Please contact the document owner (jane@example.com) to request access.",
      explanation: "This message clearly explains the issue and provides a specific path to resolution by contacting the document owner.",
    },
    whatMakesItBetter: [
      "States the issue in plain language",
      "Identifies who to contact for access",
      "Provides the contact information directly",
      "Offers a clear next step (request access)"
    ],
    copyPattern: "You don't have access to this [resource]. Please contact the [resource] [owner/administrator] ([contact info]) to request access.",
    fixability: "both",
    tags: ["access", "permissions", "security"]
  },
  {
    id: "feature-unavailable",
    categoryId: "access",
    title: "Feature Unavailable",
    context: "User attempts to use a feature not available in their current plan/subscription",
    badExample: {
      message: "Feature not available.",
      explanation: "This message doesn't explain why the feature is unavailable or how to access it.",
    },
    goodExample: {
      message: "This feature requires a Pro plan. You're currently on the Free plan. See our pricing page to upgrade and unlock all premium features.",
      explanation: "This message clearly explains why the feature is unavailable, what plan it's part of, and how to gain access.",
    },
    whatMakesItBetter: [
      "Specifies which plan includes the feature",
      "States the user's current plan",
      "Provides a direct path to upgrade",
      "Hints at additional value ('all premium features')"
    ],
    copyPattern: "This feature requires a [required plan] plan. You're currently on the [current plan] plan. See our pricing page to upgrade and unlock all premium features.",
    fixability: "user",
    tags: ["access", "subscription", "features"]
  },
  {
    id: "payment-expired-card",
    categoryId: "payment",
    title: "Expired Payment Card",
    context: "User attempts to pay with an expired credit or debit card",
    badExample: {
      message: "Card expired",
      explanation: "This message is too brief and doesn't guide the user on what to do next.",
    },
    goodExample: {
      message: "Your card has expired. Please update your card information or use a different payment method to complete your purchase.",
      explanation: "This message clearly explains the issue and offers multiple ways to resolve it.",
    },
    whatMakesItBetter: [
      "States the issue clearly",
      "Offers two different solutions (update card or use different method)",
      "Focuses on completing the purchase (the goal)",
      "Uses straightforward language"
    ],
    copyPattern: "Your card has expired. Please update your card information or use a different payment method to complete your [transaction].",
    fixability: "user",
    tags: ["payment", "card", "expired"]
  },
  {
    id: "insufficient-balance",
    categoryId: "payment",
    title: "Insufficient Account Balance",
    context: "User attempts a transaction that exceeds their available balance",
    badExample: {
      message: "Insufficient funds",
      explanation: "This message is abrupt and potentially embarrassing for the user.",
    },
    goodExample: {
      message: "Your account balance ($45.50) is less than the amount needed ($75.00). You can add funds to your account or use a different payment method.",
      explanation: "This message is factual without being judgmental, shows the exact amounts, and offers multiple solutions.",
    },
    whatMakesItBetter: [
      "Shows the specific amounts (current balance and required amount)",
      "Offers multiple solutions",
      "Uses neutral, factual language",
      "Avoids embarrassing terms like 'insufficient funds'"
    ],
    copyPattern: "Your account balance ([current amount]) is less than the amount needed ([required amount]). You can [solution 1] or [solution 2].",
    fixability: "user",
    tags: ["payment", "balance", "funds"]
  },
  {
    id: "connectivity-slow",
    categoryId: "connectivity",
    title: "Slow Connection",
    context: "User is experiencing slow network performance",
    badExample: {
      message: "Slow network detected",
      explanation: "This message only states the obvious without offering any helpful information or solutions.",
    },
    goodExample: {
      message: "Your connection is currently slow. We're loading a simplified version of the page. Some features might be limited until your connection improves.",
      explanation: "This message explains what's happening, what the app is doing about it, and sets expectations for feature availability.",
    },
    whatMakesItBetter: [
      "Explains what action the app is taking (loading simplified version)",
      "Sets expectations about feature limitations",
      "Implies the situation is temporary",
      "Focuses on providing service despite connectivity issues"
    ],
    copyPattern: "Your connection is currently slow. We're loading a simplified version of [resource]. Some features might be limited until your connection improves.",
    fixability: "both",
    tags: ["connectivity", "network", "slow"]
  },
  {
    id: "form-validation-pattern",
    categoryId: "form-input",
    title: "Pattern Mismatch",
    context: "User enters data in an incorrect format (e.g., phone number without required dashes)",
    badExample: {
      message: "Invalid format",
      explanation: "This message doesn't explain what format is expected or how to fix the input.",
    },
    goodExample: {
      message: "Please enter your phone number in the format XXX-XXX-XXXX, including the dashes.",
      explanation: "This message clearly shows the expected format with a specific example and mentions the required special characters.",
    },
    whatMakesItBetter: [
      "Shows the exact format required with placeholders (XXX-XXX-XXXX)",
      "Specifically mentions special characters needed (dashes)",
      "Uses polite, instructional language",
      "Focuses on the solution rather than the error"
    ],
    copyPattern: "Please enter your [field name] in the format [format example], including the [special characters].",
    fixability: "user",
    tags: ["form", "validation", "format", "pattern"]
  },
  {
    id: "password-requirements",
    categoryId: "form-input",
    title: "Password Requirements Not Met",
    context: "User creates a password that doesn't meet security requirements",
    badExample: {
      message: "Password too weak",
      explanation: "This message doesn't explain what makes a strong password or how to fix it.",
    },
    goodExample: {
      message: "Your password needs to be stronger. Please include at least 8 characters, one uppercase letter, one number, and one special character (like !@#$%).",
      explanation: "This message explains exactly what requirements the password needs to meet with specific examples.",
    },
    whatMakesItBetter: [
      "Lists all specific requirements (length, uppercase, number, special character)",
      "Provides examples of special characters",
      "Frames it as making the password 'stronger' rather than focusing on the failure",
      "Uses instructional rather than critical language"
    ],
    copyPattern: "Your password needs to be stronger. Please include at least [length] characters, [requirement 1], [requirement 2], and [requirement 3].",
    fixability: "user",
    tags: ["form", "password", "security", "requirements"]
  },
  {
    id: "broken-link",
    categoryId: "navigation",
    title: "Broken Link",
    context: "User clicks on a link that no longer works correctly",
    badExample: {
      message: "Link error",
      explanation: "This message doesn't explain what happened or provide any alternative paths.",
    },
    goodExample: {
      message: "This link is no longer working. We've updated our site structure. You can find what you're looking for in the Resources section or use search to locate specific content.",
      explanation: "This message explains why the link broke, takes responsibility, and offers multiple ways to find the content.",
    },
    whatMakesItBetter: [
      "Explains why the link doesn't work (site structure updated)",
      "Takes ownership of the change",
      "Offers multiple alternative paths to find content",
      "Provides specific direction (Resources section)"
    ],
    copyPattern: "This link is no longer working. We've updated our [reason]. You can find what you're looking for in the [alternative location] or [alternative method] to locate specific content.",
    fixability: "both",
    tags: ["navigation", "links", "broken"]
  },
  {
    id: "page-timeout",
    categoryId: "navigation",
    title: "Page Timeout",
    context: "Page takes too long to load and times out",
    badExample: {
      message: "Request timed out",
      explanation: "This message uses technical language and doesn't offer solutions or next steps.",
    },
    goodExample: {
      message: "This page is taking longer than expected to load. This might be due to temporary server issues or your internet connection. You can refresh the page, go back, or try again later.",
      explanation: "This message explains possible reasons for the timeout and provides multiple recovery options.",
    },
    whatMakesItBetter: [
      "Explains possible causes for the timeout",
      "Doesn't place blame on the user or system",
      "Offers multiple recovery options",
      "Uses simple, non-technical language"
    ],
    copyPattern: "This [resource] is taking longer than expected to load. This might be due to [possible reason 1] or [possible reason 2]. You can [option 1], [option 2], or [option 3].",
    fixability: "both",
    tags: ["navigation", "timeout", "loading"]
  }
];
