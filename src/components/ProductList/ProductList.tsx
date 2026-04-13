import ProductCard from "../ProductCard/ProductCard"
import { Button, Card, Text, Group, Grid} from '@mantine/core'

function ProductList({ products, onAddToCart }) {
    return (
        <Grid color='#E9ECEF'>
            {products.map((product) => {
                return (
                    <Grid.Col span={3} key={product.id}>
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            onAddToCart={onAddToCart}
                        />
                    </Grid.Col>
                )
            })} 
        </Grid>   
    )
}

export default ProductList