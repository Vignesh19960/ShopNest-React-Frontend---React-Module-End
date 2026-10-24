import React from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  return (
    <article className="cart-item">
      <div className="cart-item-image">{(item.image || item.imageUrl) && <img src={item.image || item.imageUrl} alt={item.title || item.name} />}</div>
      <div className="cart-item-info"><h3>{item.title || item.name}</h3><p>${Number(item.price).toFixed(2)} each</p><button className="text-button danger-text" onClick={() => removeFromCart(item.id)}>Remove</button></div>
      <div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => decreaseQuantity(item.id)}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => increaseQuantity(item.id)}>＋</button></div>
      <strong className="line-total">Rs. {(Number(item.price) * item.quantity).toFixed(2)}</strong>
    </article>
  )
}
