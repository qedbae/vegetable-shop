import { useState } from 'react'
import { Button, Card, Text, Group, Image } from '@mantine/core'

function ProductCard({ id, name, price, image, onAddToCart}) {
    const [count, setCount] = useState(1);
    return (
        <Card>
            <Image src={image} />
            <Group mt='sm' justify='space-between'>
                <Text>{name}</Text>
                <Group>
                    <Button variant='light' color='gray' p={0} w={30} h={30} onClick={() => {
                        if (count > 1) {
                            setCount(count - 1)
                        }       
                        }}
                    >-</Button>
                    <Text>{count}</Text>
                    <Button variant='light' color='gray' p={0} w={30} h={30} 
                    onClick={() => setCount(count + 1)}>+</Button>
                </Group>
            </Group>
            <Group justify='space-between'>
                <Text fw={500}>${price}</Text>
                <Button variant='light' color='#E7FAEB'onClick={() => {
                    onAddToCart({ id, name, price, image, count })
                    setCount(1)
                }}>Add to cart</Button>
            </Group>
        </Card>
    )
}

export default ProductCard