import React from 'react';
import { Category } from '../types';

interface Props { selected: Category; onChange: (c: Category) => void; }
export default function FiltersBar({ selected, onChange }: Props) {
  const categories: Category[] = ['AI', 'Programming', 'Gadgets'];
  return (
    <div className="mb-3">
      <select className="form-select" value={selected} onChange={e => onChange(e.target.value)}>
        <option value="">All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
}