import { Button, Badge, Modal, Group, Text, Image, Box, Container} from '@mantine/core'
import type { CartItem } from '../../types'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { Divider } from '@mantine/core'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

type HeaderProps = {
    opened: boolean
    setOpened: (value: boolean) => void
}

function Header ({ opened, setOpened }: HeaderProps) {

    const context = useContext(CartContext)
    if (!context) return null

    const { cart, increaseCount, decreaseCount } = context

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
                <Modal opened={opened} onClose={() => setOpened(false)}
                    centered={false}
                    styles={{
                        content: {
                            position: 'fixed',
                            right: 25,
                            top: 60,
                            width: 444
                        }
                    }}
                    >
                {cart.length === 0 ? (
                    <Group justify='center' align='center' mb={16}
                    style={{ flexDirection: 'column' }}> 
                        <Image src='/cart_empty.svg' w={120} h={105} mb={16}/>
                        <Text fz={16} fw={400} c='dimmed'>Your cart is empty!</Text>
                    </Group>
                ) : (
                    <>
                    {cart.map((product: CartItem, index) => {
                        const [ProductTitle, productWeight] = product.name.split(' - ')

                        return (
                        <div key={product.id}>
                        <Group justify='space-between' align='center' pb={16}>
                            <Group>
                                <Image src={product.image} w={64} h={64}/>
                                <div>
                                    <Text fw={600} fz={18}>{ProductTitle}{' '}
                                        <Text component='span' size='xs' c='dimmed'>{productWeight || ''}</Text>
                                    </Text>
                                    <Text fw={600} fz={20}>$ {product.price}</Text>
                                </div>
                            </Group>
                            <Group gap={10}>
                                <Button variant='light' color='#DEE2E6' p={0} w={30} h={30}
                                onClick={() => decreaseCount(product.id)}><IconMinus size={16} /></Button>
                                <Text>{product.count}</Text>
                                <Button variant='light' color='#DEE2E6' p={0} w={30} h={30}
                                onClick={() => increaseCount(product.id)}><IconPlus size={16} /></Button>
                            </Group>
                        </Group>
                        {index !== cart.length - 1 && <Divider w={330} ml="auto"/>}
                        </div>
                        )
                    })}
                    <Divider my={10} />
                    <Group justify='space-between'>
                        <Text fz={16} fw={600}>Total</Text>
                        <Text fz={16} fw={600}>$ {totalPrice}</Text>
                    </Group>
                    </>
                )}
                </Modal>
        </Box>
    )
}

export default Header