import ProductList from './components/ProductList/ProductList'

const products = [
    {name: "cabbage", price: 2},
    {name: "carrot", price: 1},
    {name: "tomato", price: 3 },
    { name: "potato", price: 5 }
]


function App() {
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}

export default App
