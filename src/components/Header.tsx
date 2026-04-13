import { Button, Badge, Modal, Group, Text, Image, Box} from '@mantine/core'
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
            <Group justify='space-between' style={{background: 'white'}}>
                <Image src='/logo.svg' style={{width: 209}}/>
                <Button onClick={() => setOpened(true)}>
                    <Badge>{totalCount}</Badge>
                    Cart
                </Button>
            </Group>
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