

export type BookData = {
  title: string;
  category: string;
  rating: number;
  description: string;
  highlights: string[];
  imageUrl: string;
};

export const books: BookData[] = [
  {
    title: "Learn to Code With Python in 30 Days",
    category: "Programming",
    rating: 4.9,
    description: "A comprehensive, beginner-friendly 30-day learning path to master Python fundamentals through real-world projects and problem-solving exercises.",
    highlights: ["Beginner Friendly", "30-Day Learning Path", "Real Projects", "Python Fundamentals", "Problem Solving Skills"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/TXOrEAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Java Mastery In 60 Days",
    category: "Programming",
    rating: 4.8,
    description: "Structured learning guide covering core Java concepts, practical exercises, and career-oriented learning for aspiring developers.",
    highlights: ["Structured Learning", "Core Java Concepts", "Practical Exercises", "Career-Oriented Learning"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/-UcKEQAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Basic Guide To Money For Teenagers",
    category: "Personal Finance",
    rating: 4.9,
    description: "Essential financial literacy, money management, saving, and budgeting strategies specifically focused on empowering teenagers.",
    highlights: ["Money Management", "Financial Literacy", "Saving & Budgeting", "Teen Focused"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/me3jEAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "AI Revolution",
    category: "Artificial Intelligence",
    rating: 4.7,
    description: "Understanding how AI is reshaping the world and how you can prepare for the future of technology.",
    highlights: ["AI Basics", "Future Trends", "Machine Learning", "Impact"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/s_HkEAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Startup Playbook",
    category: "Entrepreneurship",
    rating: 4.6,
    description: "The ultimate guide to building a successful startup from scratch, including funding, team building, and scaling.",
    highlights: ["Startup Basics", "Funding", "Scaling", "Leadership"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/1d0nEAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Business Communication Mastery",
    category: "Business",
    rating: 4.8,
    description: "Improve your professional communication skills, networking, and public speaking to succeed in the corporate world.",
    highlights: ["Networking", "Public Speaking", "Leadership", "Communication"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/P_2vEAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Tech Trends 2030",
    category: "Technology",
    rating: 4.5,
    description: "A deep dive into emerging technologies that will define the next decade.",
    highlights: ["Emerging Tech", "Future Predictions", "Innovation"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/3Rz4EAAAQBAJ?fife=w800-h1200",
  },
  {
    title: "Climbing the Corporate Ladder",
    category: "Career Development",
    rating: 4.7,
    description: "Actionable advice on how to accelerate your career growth, handle office politics, and get promoted faster.",
    highlights: ["Career Growth", "Office Politics", "Promotions", "Mentorship"],
    imageUrl: "https://books.google.com/books/publisher/content/images/frontcover/9lY8EAAAQBAJ?fife=w800-h1200",
  }
];
