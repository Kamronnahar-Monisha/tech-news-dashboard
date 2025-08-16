import type { Article, Category } from '../types';

export async function fetchNews(params: { q?: string | any; category?: Category }): Promise<Article[]> {
  console.log('hiiiiiiiiiiiiiiiii');
  console.log(params.q,params.category);

  // Replace localhost with your Vercel backend URL
  const res = await fetch(`https://tech-news-dashboard-backend.vercel.app/news?query=${params.q}&category=${params.category}`);

  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json();
  let allnews : Article[] = data.articles;
  allnews = allnews.filter(article=> article.title.toLowerCase().includes(params.q.toLowerCase()));
  console.log(allnews);
  
  // Backend already returns articles array, so just return it
  return allnews as Article[];
}

