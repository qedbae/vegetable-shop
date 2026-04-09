import ProductCard from "../ProductCard/ProductCard"

function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => {
                return (
                    <ProductCard 
                        key={product.name}
                        name={product.name}
                        price={product.price}
                    />
                )
            })}    
        </div>
    )
}

export default ProductList