import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'

function NotFound() {
  return <main className="container page-section empty-state"><span>404</span><h1>Looks like a wrong turn.</h1><p>That page doesn't seem to exist.</p><a className="button" href="/">Back home</a></main>
}

export default function App() {
  return <div className="app-shell"><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/products/:id" element={<ProductDetail />} /><Route path="/cart" element={<Cart />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes><footer className="site-footer"><div className="container footer-inner"><span className="brand footer-brand">ShopNest<span className="brand-dot">.</span></span><span>Find your next favorite thing.</span><span>© {new Date().getFullYear()} ShopNest</span></div></footer></div>
}
