import { useState } from 'react'

function ProductCard({ name, price}) {
    const [count, setCount] = useState(1);
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                     }       
                     }}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default ProductCard