import { createContext } from "react";
import { useState } from "react"
import type { CartItem, Product } from "../types"
import type { ReactNode } from "react";

type CartContextType = {
    cart: CartItem[]
    addToCart: (product: Product, count: number) => void
    increaseCount: (id: number) => void
    decreaseCount: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

function CartProvider( {children}: {children: ReactNode} ) {
    const [cart, setCart] = useState<CartItem[]>([]);
    
    function addToCart(product: Product, count: number) {
      const isAdded = cart.find(item => item.id === product.id)
      const newItem = { ...product, count }
      if (count <= 0) return;

      if(isAdded) {
        setCart(prev =>
          prev.map(item => {
            if (item.id === product.id) {
              return {
                ...item,
                count: item.count + count
              }
            }
            return item
          })
        )
      } else {
        setCart(prev => [...prev, newItem])
      }
    }

    function increaseCount (id: number) {
        setCart(prev =>
          prev.map(item => {
            if (item.id === id) {
              return {
                ...item,
                count: item.count + 1
              }
            }
            return item
          })
        )
      }

    function decreaseCount(id: number) {
        setCart(prev =>
          prev
          .map(item => {
            if (item.id === id) {
              return {
                ...item,
                count: item.count - 1
              }
            }
            
            return item
          })
          .filter(item => item.count > 0)
        )
      }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            increaseCount,
            decreaseCount
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }