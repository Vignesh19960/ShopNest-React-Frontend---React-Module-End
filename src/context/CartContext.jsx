import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

const CartContext = createContext(null)

function readSavedCart() {
  try {
    const saved = localStorage.getItem('shopnest-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readSavedCart)

  useEffect(() => {
    localStorage.setItem('shopnest-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems(current => {
      const existing = current.find(item => item.id === product.id)
      if (existing) return current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (id) => setCartItems(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  const decreaseQuantity = (id) => setCartItems(current => current.flatMap(item => item.id === id ? (item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []) : [item]))
  const removeFromCart = (id) => setCartItems(current => current.filter(item => item.id !== id))
  const clearCart = () => setCartItems([])

  const value = useMemo(() => ({
    cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart,
    cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cartItems.reduce((sum, item) => sum + Number(item.price || 0) * item.quantity, 0),
  }), [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
