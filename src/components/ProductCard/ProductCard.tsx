import { useState } from 'react'
import { Button, Card, Text, Group, Image } from '@mantine/core'
import { IconMinus, IconPlus, IconShoppingCart } from '@tabler/icons-react'


function ProductCard({ id, name, price, image, onAddToCart}) {
    const [count, setCount] = useState(1);
    const [ProductTitle, productWeight] = name.split(' - ')

    return (
        <Card className='card' radius={24} w={302} h={414}
            style={{display: 'flex', flexDirection: 'column'}}>
            <Image src={image} />
            <Group mt={18} justify='space-between'>
                <Group gap={10}>
                <Text fw={600} fz={18}>{ProductTitle}</Text>
                <Text size='xs' c='dimmed'>{productWeight || ''}</Text>
                </Group>
                <Group gap={10}>
                    <Button variant='light' color='#DEE2E6' p={0} w={30} h={30} onClick={() => {
                        if (count > 1) {
                            setCount(count - 1)
                        }       
                        }}
                    ><IconMinus size={16} /></Button>
                    <Text>{count}</Text>
                    <Button variant='light' color='#DEE2E6' p={0} w={30} h={30}
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
                    onAddToCart({ id, name, price, image, count })
                    setCount(1)
                }}>Add to cart
                </Button>
            </Group>
        </Card>
    )
}

export default ProductCard
