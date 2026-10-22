import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from './useProducts.js'
import ProductGrid from '../components/ProductGrid.jsx'

export default function Home() {
  const { products, loading, error } = useProducts()
  return <>
    <section className="hero"><div className="container hero-inner"><div className="hero-copy"><p className="hero-kicker">A little joy in every delivery</p><h1>Find your next<br /><span>favorite thing.</span></h1><p className="hero-description">Thoughtful finds, everyday essentials, and little upgrades that make life better.</p><Link to="/products" className="button button-light">Explore the collection <span>↗</span></Link><div className="hero-proof"><span>✦ Curated picks</span><span>✦ Easy shopping</span></div></div><div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-card art-card-main"><span className="art-spark">✳</span><span>GOOD<br/>THINGS<br/><b>INSIDE.</b></span><div className="art-card-circle"/></div><div className="art-tag">YOUR DAILY<br/>DOSE OF NICE</div><span className="floating-star star-one">✦</span><span className="floating-star star-two">✳</span></div></div></section>
    <section className="section container"><div className="section-heading"><div><p className="eyebrow">THE SHOPNEST EDIT</p><h2>Popular right now</h2><p className="muted">A few good things to get you started.</p></div><Link to="/products" className="text-link">View all products ↗</Link></div>{loading ? <div className="loading-state"><span className="spinner"/>Loading products…</div> : error ? <div className="error-state">{error} <Link to="/products">Try again</Link></div> : <ProductGrid products={products.slice(0, 4)} />}</section>
    <section className="promise-strip"><div className="container promise-grid"><div><span>✦</span><div><b>Curated for you</b><p>Everyday picks worth keeping.</p></div></div><div><span>↗</span><div><b>Simple shopping</b><p>Find it, add it, love it.</p></div></div><div><span>♡</span><div><b>Made for real life</b><p>Small upgrades, good vibes.</p></div></div></div></section>
  </>
}
