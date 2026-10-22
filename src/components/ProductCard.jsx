import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const image = product.image || product.imageUrl
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap" aria-label={`View ${product.title || product.name}`}>
        {image ? <img src={image} alt={product.title || product.name} loading="lazy" /> : <div className="image-placeholder">ShopNest</div>}
      </Link>
      <div className="product-card-body">
        <p className="eyebrow">{product.category || 'Featured'}</p>
        <h3><Link to={`/products/${product.id}`}>{product.title || product.name}</Link></h3>
        {product.rating?.rate && <p className="rating">★ {product.rating.rate} <span>({product.rating.count || 0} reviews)</span></p>}
        <div className="product-card-bottom"><strong>${Number(product.price || 0).toFixed(2)}</strong><button className="icon-button" onClick={() => addToCart(product)} aria-label="Add to cart">＋</button></div>
      </div>
    </article>
  )
}
