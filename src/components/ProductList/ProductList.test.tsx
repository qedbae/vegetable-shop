import ProductList from "./ProductList"
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { CartProvider } from "../../context/CartContext"
import { MantineProvider } from '@mantine/core'

test('renders products', () => {
    const products = [
        {
        id: 1,
        name: 'Cabbage',
        price: 100,
        image: 'test.png'
        }
    ]

    render(
        <CartProvider>
            <MantineProvider>
                <ProductList products={products} loading={false} /> 
            </MantineProvider>
        </CartProvider>)
    const product = screen.getByText(/cabbage/i)
    expect(product).toBeTruthy()
    })

    
test('shows loader when loading', () => {
    render(
        <CartProvider>
            <MantineProvider>
                <ProductList products={[]} loading={true} /> 
            </MantineProvider>
        </CartProvider>)
    const product = screen.getAllByTestId('loader')
    expect(product[0]).toBeInTheDocument()
    })