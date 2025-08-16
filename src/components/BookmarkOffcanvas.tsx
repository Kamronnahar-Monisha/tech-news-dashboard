import React from 'react';
import { Article } from '../types';

interface Props { bookmarks: Article[]; onRemove: (a: Article) => void; }
export default function BookmarkOffcanvas({ bookmarks, onRemove }: Props) {
  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" aria-labelledby="offcanvasScrollingLabel" id="offcanvasScrolling" style={{ visibility: 'visible' }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Bookmarks</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {bookmarks.length === 0 && <p>No bookmarks.</p>}
        {bookmarks.map((b, i) => (
          <div key={i} className="mb-2">
            <a href={b.url} target="_blank" rel="noopener noreferrer">{b.title}</a>
            <button className="btn btn-sm btn-danger ms-2" onClick={() => onRemove(b)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}