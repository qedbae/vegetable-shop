import { Button, Badge, Modal, Group, Text, Image, Box, Container} from '@mantine/core'
import { useState } from 'react'
type HeaderProps = {
    cart: any[]
    opened: boolean
    setOpened: (value: boolean) => void
    onIncrease: (id: number) => void
    onDecrease: (id:number) => void
}

function Header ({ cart, opened, setOpened, onIncrease, onDecrease }: HeaderProps) {
    const totalCount = cart.reduce((acc, product) => acc + product.count, 0)
    const totalPrice = cart.reduce((acc, product) => acc + (product.price * product.count), 0)
    return (
        <Box style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            <Container size='100%' py='sm' style={{background: 'white'}}>
                <Group justify='space-between'>
                    <Image src='/logo.svg' style={{width: 209}}/>
                    <Button onClick={() => setOpened(true)}
                        radius='md'
                        color='#54B46A'
                        c='#FFFFFF'>
                        <Group gap='xs'>
                            {totalCount > 0 && <Badge w={20} h={20} px={0} py={0} fw={600}
                                style={{
                                    backgroundColor:'#FFFFFF',
                                    color: '#212529'
                                }}>
                                {totalCount}</Badge>}
                            <Text fw={600} size='sm'>Cart</Text>
                            <img src='/cart.svg' width={20} height={20}/>
                        </Group>
                    </Button>
                </Group>
            </Container>
                <Modal opened={opened} onClose={() => setOpened(false)}>
                {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    <>
                    {cart.map((product) => (
                        <Group key={product.id}>
                            <Image src={product.image} />
                            <Text>{product.name}</Text>
                            <Text>{product.price}</Text>
                            <Button onClick={() => onDecrease(product.id)}>-</Button>
                            <Text>{product.count}</Text>
                            <Button onClick={() => onIncrease(product.id)}>+</Button>
                        </Group>
                    ))}
                    <p>Total: {totalPrice}</p>
                    </>
                    )}
                </Modal>
        </Box>
    )
}

export default Header