import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { cartCount } = useCart()
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="brand"><span className="brand-mark">S</span> ShopNest<span className="brand-dot">.</span></NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart" className="cart-link">Cart <span className="cart-badge">{cartCount}</span></NavLink>
        </div>
      </nav>
    </header>
  )
}
