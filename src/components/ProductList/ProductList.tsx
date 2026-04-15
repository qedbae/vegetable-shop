import ProductCard from "../ProductCard/ProductCard"
import { Button, Card, Text, Group, Grid} from '@mantine/core'

function ProductList({ products, onAddToCart }) {
    return (
        <div style={{
            backgroundColor: '#E9ECEF',
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 302px)', 
            gap: 16 ,
            justifyContent: 'center'}}>
            {products.map((product) => {
                return (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            onAddToCart={onAddToCart}
                        />
                )
            })} 
        </div>   
    )
}

export default ProductList