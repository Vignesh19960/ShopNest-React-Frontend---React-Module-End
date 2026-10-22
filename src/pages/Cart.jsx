import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { cartItems, subtotal, clearCart } = useCart()
  const tax = subtotal * 0.08
  const total = subtotal + tax
  return <main className="container page-section"><div className="page-heading"><p className="eyebrow">YOUR LITTLE CORNER</p><h1>Shopping cart<span className="brand-dot">.</span></h1><p className="muted">Review your finds before checkout.</p></div>{cartItems.length === 0 ? <div className="empty-state cart-empty"><span>♡</span><h2>Your cart is taking a nap.</h2><p>Find something lovely and it will show up here.</p><Link to="/products" className="button">Explore products ↗</Link></div> : <div className="cart-layout"><section className="cart-list"><div className="cart-list-heading"><b>Your items ({cartItems.reduce((n, item) => n + item.quantity, 0)})</b><button className="text-button" onClick={clearCart}>Clear cart</button></div>{cartItems.map(item => <CartItem key={item.id} item={item} />)}</section><aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div><div><span>Estimated tax (8%)</span><span>${tax.toFixed(2)}</span></div><div className="summary-total"><b>Total</b><b>${total.toFixed(2)}</b></div><button className="button checkout-button" onClick={() => window.alert('Checkout is a demo. Connect your payment backend to accept orders.')}>Continue to checkout <span>→</span></button><p className="small-note">Tax is an estimate and may vary at checkout.</p></aside></div>}</main>
}
