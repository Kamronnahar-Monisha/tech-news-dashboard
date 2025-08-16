import React, { useEffect, useState } from 'react';
import { Article, Category } from './types';
import { fetchNews } from './services/api';
import { useLocalStorage } from './hooks/useLocalStorage';
import FiltersBar from './components/FiltersBar';
import NewsCard from './components/NewsCard';
import BookmarkOffcanvas from './components/BookmarkOffcanvas';

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('');
  const [bookmarks, setBookmarks] = useLocalStorage<Article[]>('bookmarks', []);

  useEffect(() => {
    fetchNews({ q: search, category }).then(setArticles).catch(console.error);
  }, [search, category]);

  const saveBookmark = (a: Article) => setBookmarks([...bookmarks, a]);
  const removeBookmark = (a: Article) => setBookmarks(bookmarks.filter(b => b.url !== a.url));

  return (
    <div className="container my-4">
      <div className="row">
        <h1 className='col-md-6'>Tech News Dashboard</h1>
        <div className='col-md-6'>
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Bookmarks</button>
        </div>
      </div>
      <input className="form-control mb-3" placeholder="Search..." value={search} onChange={e => {
        setSearch(e.target.value);
        }} />
      <FiltersBar selected={category} onChange={setCategory} />
      <div className="row">
        {articles.length && articles.map(a => (
          <div key={a.url} className="col-md-6">
            <NewsCard article={a} onSave={saveBookmark} bookmarks={bookmarks}/>
          </div>
        ))}
      </div>
      <BookmarkOffcanvas bookmarks={bookmarks} onRemove={removeBookmark} />
    </div>
  );
}