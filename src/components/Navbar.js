import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../sneakers.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <NavLogo src={logo} alt='Página Inicial' className="navbar-brand"/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Produtos
                        </Link>
                    </li>
                </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                    <i className="fas fa-cart-plus"></i>
                    </span>
                    Ver carrinho
                </ButtonContainer>
            </Link>

            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link{
        color: var(--ghostWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

const NavLogo = styled.img `
    height: 10vh;
    width: 5vw;

`

const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    font-size: 1.4rem;
    border-radius: 0.4rem;
    border: 0.05rem solid var(--ice);
    color: var(--ice);
    padding: 0.2rem 0.5rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue)
    }
    &:focus{
        outline: none;
    }
`