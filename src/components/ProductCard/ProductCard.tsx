import { useContext, useState } from 'react'
import { Button, Card, Text, Group, Image } from '@mantine/core'
import { IconMinus, IconPlus, IconShoppingCart } from '@tabler/icons-react'
import CartContext from '../../context/CartContext'

type ProductCardProps = {
    id: number
    name: string
    price: number
    image: string
}


function ProductCard({ id, name, price, image}: ProductCardProps) {
    const [count, setCount] = useState(1);
    const [ProductTitle, productWeight] = name.split(' - ')

    const context = useContext(CartContext)
    if (!context) return null
    
    const {addToCart} = context

    return (
        <Card data-testid='product-card' className='card' radius={24} w={302} h={414}
            style={{display: 'flex', flexDirection: 'column'}}>
            <Image src={image} />
            <Group mt={18} justify='space-between'>
                <Group gap={10}>
                <Text fw={600} fz={18}>{ProductTitle}</Text>
                <Text size='xs' c='dimmed'>{productWeight || ''}</Text>
                </Group>
                <Group gap={10}>
                    <Button data-testid='decrease-btn' variant='light' color='#DEE2E6' p={0} w={30} h={30} onClick={() => {
                        if (count > 1) {
                            setCount(count - 1)
                        }       
                        }}
                    ><IconMinus size={16} /></Button>
                    <Text data-testid='counter'>{count}</Text>
                    <Button data-testid='increase-btn' variant='light' color='#DEE2E6' p={0} w={30} h={30}
                    onClick={() => setCount(count + 1)}><IconPlus size={16} /></Button>
                </Group>
            </Group>
            <Group justify='space-between' mt={12}>
                <Text fw={600} fz={20}>$ {price}</Text>
                <Button 
                color='#E7FAEB' 
                c='#3B944E' 
                rightSection={<IconShoppingCart width={20} height={20} />}
                px={50}
                onClick={() => {
                    addToCart({ id, name, price, image}, count )
                    setCount(1)
                }}>Add to cart
                </Button>
            </Group>
        </Card>
    )
}

export default ProductCard
