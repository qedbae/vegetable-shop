import ProductList from './components/ProductList/ProductList'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import { Loader, Container } from '@mantine/core'

function App() {
  const [cart, setCart] = useState([]); 
  const [opened, setOpened] = useState(false);
  const [products, setProducts] = useState([])
    useEffect(() => {
      fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
    }, [])

    if (products.length === 0) {
      return <Loader />
    }

    function handleAddToCart(product) {
      const isAdded = cart.find(item => item.id === product.id)

      if(isAdded) {
        setCart(prev =>
          prev.map(item => {
            if (item.id === product.id) {
              return {
                ...item,
                count: item.count + product.count
              }
            }
            return item
          })
        )
      } else {
        setCart(prev => [...prev, product])
      }
    }

    function handleIncrease(id) {
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

    function handleDecrease(id) {
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
        <div>
          <Header 
          cart={cart}
          opened={opened}
          setOpened={setOpened}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease} 
          />
            <ProductList
            products={products}
            onAddToCart={handleAddToCart}
            />
        </div>
      )
}

export default App
