export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
