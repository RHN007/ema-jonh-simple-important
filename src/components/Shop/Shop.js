import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])
   useEffect(()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[])
   
   const handleClick = (product) => {
//    console.log(product)
    // cart.push(product)
    const newCart = [...cart, product]; 
    setCart(newCart)
}
    return (
        <div className='shop-container'>
            <div className='product-container'>

            {
                products.map(product => <Products 
                product={product} 
                key={product.id} 
                handleAddToCart = {handleClick}
                ></Products>)
            }


            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;