import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: number;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  pages: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Getting Started with Personal Finance',
      excerpt: 'Learn the fundamentals of managing your money effectively and building wealth.',
      content: 'Personal finance is the foundation of financial security. Whether you are just starting your career or planning for retirement, understanding the basics of personal finance is crucial.\n\nThe first step in taking control of your finances is understanding where your money goes. By tracking your income and expenses, you can identify areas where you are overspending and opportunities to save more.\n\nBeyond budgeting, it is important to build an emergency fund. Most financial experts recommend setting aside 3-6 months of living expenses in an easily accessible savings account.\n\nFinally, do not forget about investing for your future. Whether through retirement accounts, stocks, or real estate, investing your money can help it grow over time.',
      category: 'Budgeting',
      author: 'Sarah Johnson',
      date: '2024-12-15',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdtCQhCsDjGEh-47KGt6KlqgY0CsfDwoS2A&s',
      readTime: 5
    },
    {
      id: 2,
      title: 'Understanding Credit Scores',
      excerpt: 'Discover how credit scores work and strategies to improve your credit rating.',
      content: 'Your credit score is a three-digit number that represents your creditworthiness. It is used by lenders to determine whether to approve you for loans and what interest rates to offer.\n\nCredit scores range from 300 to 850, with higher scores indicating better creditworthiness. The three major credit bureaus calculate scores based on several factors: payment history (35%), amounts owed (30%), length of credit history (15%), credit mix (10%), and new credit (10%).\n\nTo improve your credit score, focus on paying your bills on time, keeping credit card balances low, and avoiding opening too many new accounts at once.\n\nA good credit score (typically 670 and above) can save you thousands of dollars over your lifetime by qualifying you for better interest rates.',
      category: 'Credit',
      author: 'Michael Chen',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&h=400&fit=crop',
      readTime: 6
    },
    {
      id: 3,
      title: 'Investing for Beginners: Start Small, Think Big',
      excerpt: 'A beginner guide to investing and building wealth through smart strategies.',
      content: 'Investing might seem intimidating if you are new to it, but it is one of the most powerful ways to build wealth over time. The good news is that you do not need a lot of money to get started.\n\nThere are several investment options available to beginners. Stocks represent ownership in companies, bonds are loans you make to corporations or governments, and mutual funds and ETFs offer diversified portfolios managed by professionals.\n\nOne of the most important principles of investing is dollar-cost averaging. This strategy helps you avoid the temptation to time the market and reduces the impact of volatility.\n\nRemember, investing is a long-term game. The power of compound interest means that the earlier you start investing, the more time your money has to grow.',
      category: 'Investing',
      author: 'Emma Rodriguez',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      readTime: 7
    },
    {
      id: 4,
      title: 'The Complete Guide to Retirement Planning',
      excerpt: 'Plan for a secure retirement with our comprehensive guide to savings and strategies.',
      content: 'Retirement planning is not just for people nearing retirement age. It is something everyone should start thinking about early in their career. The earlier you start saving and investing for retirement, the more time compound interest has to work in your favor.\n\nThere are several retirement account options available, each with its own benefits and limitations. Traditional IRAs offer tax-deductible contributions but are taxed upon withdrawal. Roth IRAs offer tax-free growth and withdrawals.\n\nA general rule of thumb is to save 10-15% of your gross income for retirement. However, the exact amount depends on your lifestyle, expenses, and retirement goals.\n\nDo not neglect other retirement considerations like healthcare costs, inflation, and longevity. A comprehensive retirement plan should be reviewed regularly as your circumstances change.',
      category: 'Retirement',
      author: 'David Park',
      date: '2024-11-30',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
      readTime: 8
    },
    {
      id: 5,
      title: 'Smart Ways to Save Money Every Day',
      excerpt: 'Practical tips and strategies to reduce expenses and increase your savings.',
      content: 'Saving money does not have to be difficult or involve drastic lifestyle changes. By implementing small, manageable strategies, you can significantly increase your savings over time.\n\nFirst, automate your savings. Set up automatic transfers from your checking account to your savings account on payday. This ensures that saving becomes a priority before you have a chance to spend the money.\n\nNext, reduce your subscriptions and recurring expenses. Review your monthly bills and cancel services you do not actively use. Small subscription fees add up quickly.\n\nCook at home instead of eating out. Meal planning and cooking your own meals can save you a significant amount of money compared to restaurant dining.\n\nFinally, use the 30-day rule for non-essential purchases. Wait 30 days before buying something you want but do not need.',
      category: 'Budgeting',
      author: 'Jessica Williams',
      date: '2024-11-25',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8JJGQRueQeop_RRDv-7PahoIsLiabr_MIg&s',
      readTime: 4
    },
    {
      id: 6,
      title: 'Debt Management Strategies That Work',
      excerpt: 'Learn effective strategies to manage and eliminate debt from your financial life.',
      content: 'Debt can be overwhelming, but with the right strategies, you can take control and work toward becoming debt-free. Understanding your options and creating a solid plan is the first step to financial freedom.\n\nThere are two main strategies for tackling debt: the snowball method and the avalanche method. The snowball method involves paying off the smallest debt first, then rolling that payment into the next smallest debt.\n\nBeyond choosing a repayment strategy, consider consolidating your debt. Debt consolidation can lower your interest rate and simplify your payments by combining multiple debts into a single loan.\n\nIt is also crucial to address the root causes of debt. If overspending led to your debt, you will need to change your spending habits. Create a realistic budget, use cash instead of credit cards, and build an emergency fund.',
      category: 'Debt',
      author: 'Mark Thompson',
      date: '2024-11-20',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=400&fit=crop',
      readTime: 6
    }
  ];

  private resources: Resource[] = [
    {
      id: 1,
      title: 'The Ultimate Personal Finance Handbook',
      description: 'A comprehensive guide covering all aspects of personal finance from budgeting to investing.',
      category: 'General',
      downloadUrl: '#',
      pages: 48,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wofFn07mQSsv26hVY3BidNmaevqSrMaNKA&s'
    },
    {
      id: 2,
      title: 'Monthly Budget Planner Template',
      description: 'Printable templates to help you track income, expenses, and savings goals.',
      category: 'Budgeting',
      downloadUrl: '#',
      pages: 12,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'Beginner Guide to Stock Market Investing',
      description: 'Learn the fundamentals of stock market investing with real-world examples and strategies.',
      category: 'Investing',
      downloadUrl: '#',
      pages: 36,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop'
    },
    {
      id: 4,
      title: 'Credit Score Improvement Workbook',
      description: 'Step-by-step workbook to understand and improve your credit score over 90 days.',
      category: 'Credit',
      downloadUrl: '#',
      pages: 28,
      image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=500&fit=crop'
    },
    {
      id: 5,
      title: 'Retirement Planning Checklist',
      description: 'Essential checklist to ensure you have covered all aspects of retirement planning.',
      category: 'Retirement',
      downloadUrl: '#',
      pages: 8,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=500&fit=crop'
    },
    {
      id: 6,
      title: 'Debt Elimination Roadmap',
      description: 'A strategic plan to systematically eliminate your debt and achieve financial freedom.',
      category: 'Debt',
      downloadUrl: '#',
      pages: 24,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=500&fit=crop'
    }
  ];

  private categories: Category[] = [
    { id: 1, name: 'Budgeting', slug: 'budgeting', description: 'Learn to manage your money effectively', count: 2 },
    { id: 2, name: 'Credit', slug: 'credit', description: 'Build and maintain a healthy credit score', count: 1 },
    { id: 3, name: 'Investing', slug: 'investing', description: 'Grow your wealth through smart investments', count: 1 },
    { id: 4, name: 'Retirement', slug: 'retirement', description: 'Plan for a secure financial future', count: 1 },
    { id: 5, name: 'Debt', slug: 'debt', description: 'Manage and eliminate debt', count: 1 },
    { id: 6, name: 'Saving', slug: 'saving', description: 'Practical strategies to save money', count: 0 }
  ];

  constructor() {}

  getAllArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticleById(id: number): Observable<Article | undefined> {
    return of(this.articles.find(a => a.id === id));
  }

  getArticlesByCategory(category: string): Observable<Article[]> {
    return of(this.articles.filter(a => a.category.toLowerCase() === category.toLowerCase()));
  }

  getFeaturedArticles(limit: number = 3): Observable<Article[]> {
    return of(this.articles.slice(0, limit));
  }

  getAllResources(): Observable<Resource[]> {
    return of(this.resources);
  }

  getResourcesByCategory(category: string): Observable<Resource[]> {
    return of(this.resources.filter(r => r.category.toLowerCase() === category.toLowerCase()));
  }

  getAllCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryBySlug(slug: string): Observable<Category | undefined> {
    return of(this.categories.find(c => c.slug === slug));
  }

  submitNewsletter(email: string): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: `Successfully subscribed with ${email}`
    });
  }

  submitLogin(email: string, password: string): Observable<{ success: boolean; token?: string; message: string }> {
    if (email && password && password.length >= 6) {
      return of({
        success: true,
        token: 'mock-jwt-token-' + Date.now(),
        message: 'Login successful'
      });
    }
    return of({
      success: false,
      message: 'Invalid credentials'
    });
  }

  submitSignup(email: string, password: string, confirmPassword: string): Observable<{ success: boolean; message: string }> {
    if (password !== confirmPassword) {
      return of({
        success: false,
        message: 'Passwords do not match'
      });
    }
    if (password.length < 6) {
      return of({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }
    return of({
      success: true,
      message: `Account created successfully for ${email}`
    });
  }
}
