import React from 'react'
import { useMemo, useState } from 'react'
import CategoryFilter from '../components/CategoryFilter.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { useProducts } from './useProducts.js'

export default function Products() {
  const { products, loading, error } = useProducts()
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category).filter(Boolean))], [products])
  const filtered = useMemo(() => products.filter(product => {
    const title = (product.title || product.name || '').toLowerCase()
    return (category === 'All' || product.category === category) && title.includes(search.trim().toLowerCase())
  }), [products, category, search])

  return <main className="container page-section"><div className="page-heading"><p className="eyebrow">THE FULL COLLECTION</p><h1>All the good stuff.</h1><p className="muted">Browse the collection and find something you love.</p></div><div className="product-toolbar"><label className="search-box"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products…" aria-label="Search products" /></label><span className="result-count">{loading ? 'Loading…' : `${filtered.length} items`}</span></div>{!loading && !error && <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />}{loading ? <div className="loading-state"><span className="spinner"/>Loading products…</div> : error ? <div className="error-state"><span>Oops!</span><p>{error}</p><button className="button" onClick={() => window.location.reload()}>Try again</button></div> : <ProductGrid products={filtered} />}</main>
}
