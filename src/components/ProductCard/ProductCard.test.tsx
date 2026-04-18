import ProductCard from "./ProductCard"
import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import CartContext, { CartProvider } from "../../context/CartContext"
import { MantineProvider } from '@mantine/core'
import { fireEvent } from '@testing-library/react'
import { within } from "@testing-library/react"

test('increases count on click "+"', () => {
    const card = {
    id: 1,
    name: 'Cabage',
    price: 100,
    image: 'test.svg'
}

 render(
        <CartProvider>
            <MantineProvider>
                <ProductCard {...card}/> 
            </MantineProvider>
        </CartProvider>)
    const productCards = screen.getAllByTestId('product-card')
    const productCard = productCards[productCards.length - 1]

    const increaseButton = screen.getByTestId('increase-btn')

    expect(within(productCard).getByTestId('counter')).toHaveTextContent('1')
    fireEvent.click(increaseButton) 
    expect(within(productCard).getByTestId('counter')).toHaveTextContent('2')
    })


test('decreases count on click "-"',() => {
    const card = {
    id: 1,
    name: 'Cabage',
    price: 100,
    image: 'test.svg'
}

 render(
        <CartProvider>
            <MantineProvider>
                <ProductCard {...card}/> 
            </MantineProvider>
        </CartProvider>)

    const productCards = screen.getAllByTestId('product-card')
    const productCard = productCards[productCards.length - 1]

    const decreaseButton = within(productCard).getByTestId('decrease-btn')
    const increaseButton = within(productCard).getByTestId('increase-btn')

    expect(within(productCard).getByTestId('counter')).toHaveTextContent('1')

    fireEvent.click(increaseButton) 
    expect(within(productCard).getByTestId('counter')).toHaveTextContent('2')

    fireEvent.click(decreaseButton) 
    expect(within(productCard).getByTestId('counter')).toHaveTextContent('1')
    })

test('does not change count on click "-" when value = 1', () => {
    const card = {
    id: 1,
    name: 'Cabage',
    price: 100,
    image: 'test.svg'
}

 render(
        <CartProvider>
            <MantineProvider>
                <ProductCard {...card}/> 
            </MantineProvider>
        </CartProvider>)
    const productCards = screen.getAllByTestId('product-card')
    const productCard = productCards[productCards.length - 1]

    const decreaseButton = within(productCard).getByTestId('decrease-btn')

    expect(within(productCard).getByTestId('counter')).toHaveTextContent('1')
    fireEvent.click(decreaseButton) 
    expect(within(productCard).getByTestId('counter')).toHaveTextContent('1')
    })

test('adds product to cart on click "Add to card"', () => {

    const card = {
    id: 1,
    name: 'Cabage',
    price: 100,
    image: 'test.svg'
}

    const addToCart = vi.fn()

    render (
        <MantineProvider>
            <CartContext.Provider value={{
            cart: [],
            addToCart,
            increaseCount: vi.fn(),
            decreaseCount: vi.fn()
        }}>
                <ProductCard {...card}/> 
            </CartContext.Provider>
        </MantineProvider>)

        const productCards = screen.getAllByTestId('product-card')
        const productCard = productCards[productCards.length - 1]

        const addToCartBtn = within(productCard).getByText(/add to cart/i)

        fireEvent.click(addToCartBtn)
        expect(addToCart).toHaveBeenCalledWith(card, 1)
    })
        
