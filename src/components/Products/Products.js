import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props
    const { img, name, price, ratings, seller } =  product
    // console.log(props)

  
    return (
        <div className='product-cart'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>

            <button onClick={()=> handleAddToCart(product)} >Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> </button>

        </div>
    );
};

export default Products;