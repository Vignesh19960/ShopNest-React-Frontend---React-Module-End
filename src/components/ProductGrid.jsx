import React from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (!products.length) return <div className="empty-state"><span>⌕</span><h3>No products found</h3><p>Try another search or category.</p></div>
  return <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} />)}</div>
}
