import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form, FormControl, Button, Container, Badge } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { useDispatch, useSelector } from 'react-redux'

import {
    COUNT_CART_TOTALS
} from '../constants/cartConstants'

const Header = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems, total_items } = cart

    useEffect(() => {
        // localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({ type: COUNT_CART_TOTALS })
    }, [cartItems])

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />

                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart <Badge pill variant="info">{total_items}</Badge></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Header
