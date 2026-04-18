import ProductList from './components/ProductList/ProductList'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import { Text } from '@mantine/core'
import type { Product } from './types'

function App() {
   
  const [opened, setOpened] = useState(false);
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          setLoading(false)
      }
    ) 
    .catch(() => setLoading(false))
    }, [])

      return (
        <div>
          <Header 
          opened={opened}
          setOpened={setOpened}
          />
          <div>
            <Text fz={32} fw={600} py={28} pl={200}
            style={{
              backgroundColor: '#E9ECEF',
              }}>
              Catalog
            </Text>
            <ProductList
            products={products}
            loading={loading}
            />
          </div>
        </div>
      )
}

export default App
