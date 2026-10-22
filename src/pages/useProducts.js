import { useEffect, useState } from 'react'
import axios from 'axios'

const PRODUCTS_API = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com/products'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    setLoading(true)
    axios.get(PRODUCTS_API)
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : response.data?.products
        if (!Array.isArray(data)) throw new Error('The API response did not contain a product list.')
        if (active) { setProducts(data); setError('') }
      })
      .catch(() => { if (active) setError('We could not load products right now. Please check your connection and try again.') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  return { products, loading, error }
}
