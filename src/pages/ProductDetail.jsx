import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const PRODUCTS_API = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com/products'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    setLoading(true); setError(''); setProduct(null)
    axios.get(`${PRODUCTS_API.replace(/\/$/, '')}/${id}`)
      .then(res => { if (active) setProduct(res.data) })
      .catch(() => { if (active) setError('We could not find this product. It may have been removed.') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [id])

  if (loading) return <div className="loading-state page-section"><span className="spinner"/>Loading product…</div>
  if (error || !product || product.message === 'Not Found') return <main className="container page-section"><div className="error-state"><h2>Product not found</h2><p>{error || 'This product is not available.'}</p><Link className="button" to="/products">Back to products</Link></div></main>
  const title = product.title || product.name
  const image = product.image || product.imageUrl
  return <main className="container page-section"><Link to="/products" className="back-link">← Back to products</Link><div className="detail-layout"><div className="detail-image">{image && <img src={image} alt={title} />}</div><div className="detail-copy"><p className="eyebrow">{product.category || 'SHOPNEST PICK'}</p><h1>{title}</h1>{product.rating?.rate && <p className="rating">★ {product.rating.rate} <span>({product.rating.count || 0} reviews)</span></p>}<p className="detail-price">${Number(product.price || 0).toFixed(2)}</p><p className="detail-description">{product.description || 'A thoughtful find for your everyday.'}</p><button className="button" onClick={() => addToCart(product)}>Add to cart <span>＋</span></button><p className="small-note">Easy to browse. Simple to love.</p></div></div></main>
}
