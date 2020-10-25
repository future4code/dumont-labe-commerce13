import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value => {
                   const {
                    id,
                    brand,
                    img,
                    info,
                    price,
                    title,
                    inCart}
                     = value.detailProduct;
                    return (

                        <div className='container py-5'>

                            {/* TITLE INFO */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* END TITLE */}

                            {/* PRODUCT INFO */}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='imagem do produto'/>
                                </div>
                            {/* PRODUCT INFO END */}

                            {/* PRODUCT TEXT */}
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h2>{title}</h2>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    Marca: <span className='text-uppercase'>
                                        {brand}
                                    </span>
                                </h4>
                                <h4 className='text-blue'>
                                    <strong>
                                        preço: <span>R$</span> {price}
                                    </strong>
                                </h4>
                                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                    Sobre o produto:
                                </p>
                                <p className='text-muted lead'>
                                    {info}
                                </p>
                                
                                {/* BUTTONS */}
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Voltar aos produtos
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                     cart 
                                     disabled={inCart? true : false} 
                                     onClick={ () => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart? 'No carrinho' : "Adicionar ao carrinho"}
                                    </ButtonContainer>
                                </div>

                            </div>

                            </div>

                            
                        </div>
                    )
                    
               }}
           </ProductConsumer>
        )
    }
}
