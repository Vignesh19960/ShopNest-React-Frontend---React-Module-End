import React from "react"
export default function CategoryFilter({ categories, selected, onSelect }) {
  return <div className="category-filter" aria-label="Filter by category">{categories.map(category => <button key={category} className={selected === category ? 'filter-chip active' : 'filter-chip'} onClick={() => onSelect(category)}>{category}</button>)}</div>
}
