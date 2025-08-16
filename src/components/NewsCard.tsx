import React from 'react';
import { Article } from '../types';

interface Props { article: Article; onSave: (a: Article) => void;bookmarks:Article[]}
export default function NewsCard({ article, onSave,bookmarks }: Props) {
    const status = bookmarks.find(bookmark=>{return bookmark.url === article.url});
    return (
        <div className="card mb-3 p-2" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={article.urlToImage} className="img-fluid rounded-start" alt={article.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <button className="btn btn-primary btn-sm" onClick={() => onSave(article)}>{status?"Saved":"Save"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}