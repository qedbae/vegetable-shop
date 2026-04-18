import ProductCard from "../ProductCard/ProductCard"
import { Card } from '@mantine/core'
import type { Product } from '../../types'
import LoaderBars from "../LoaderBars"

type ProductListProps = {
    products: Product[]
    loading: boolean
}

function ProductList({ products, loading }: ProductListProps) {
   
    if(loading) {
        return (
           <div style={{
                backgroundColor: '#E9ECEF',
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 302px)', 
                gap: 16 ,
                justifyContent: 'center'}
                }>
                {Array.from({  length : 8 }).map((_, i) => (
                    <Card key={i} radius={24} w={302} h={414} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                    <LoaderBars />
                    </Card>
                ))} 
            </div>
        )
    }
    
    return (
        <div style={{
            backgroundColor: '#E9ECEF',
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 302px)', 
            gap: 16 ,
            justifyContent: 'center'}
            }>
            {products.map((product) => {
                return (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                )
            })} 
        </div>   
    )
}

export default ProductList