
import { 
  FileX, 
  AlertCircle, 
  FilePlus2, 
  CreditCard, 
  Wifi, 
  Search, 
  MapPin 
} from "lucide-react";

export interface ErrorCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  icon: any; // Lucide icon component
  color: string;
}

export const errorCategories: ErrorCategory[] = [
  {
    id: "form-input",
    title: "Form Input Errors",
    emoji: "🔢",
    description: "Handling required fields, input validation, and formatting issues.",
    icon: AlertCircle,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "validation",
    title: "Validation Errors",
    emoji: "🧪",
    description: "Server-side validations, data conflicts, and business rule failures.",
    icon: AlertCircle,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "navigation",
    title: "Navigation Errors",
    emoji: "🧭",
    description: "404 Not Found, 403 Forbidden, and other routing issues.",
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "search",
    title: "Search Errors",
    emoji: "🔍",
    description: "No results, misspelled keywords, and search failures.",
    icon: Search,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "connectivity",
    title: "Connectivity Errors",
    emoji: "🌐",
    description: "No internet, timeouts, and network failures.",
    icon: Wifi,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "payment",
    title: "Payment Errors",
    emoji: "💳",
    description: "Card declined, payment gateway failures, and checkout issues.",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "file-upload",
    title: "File Upload Errors",
    emoji: "📤",
    description: "Unsupported file types, size limits, and upload failures.",
    icon: FileX,
    color: "bg-cyan-100 text-cyan-600",
  },
];
