import React from 'react'
import Product from '../Product'

export default function CartColumns() {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Produtos</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Nome do produto</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>preço</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>quantidade</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Remover do carrinho</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Total</p>
                </div>
            </div>
            
        </div>
    )
}
