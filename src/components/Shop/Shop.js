import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
   
useEffect(()=> {
    const storedCart = getStoredCart(); 
    const savedCart = []; 
    for(const id in storedCart){
        const addedProducts = products.find(product => product.id === id); 
        if(addedProducts){
            const quantity = storedCart[id]; 
            addedProducts.quantity = quantity; 
            savedCart.push(addedProducts); 
        }
    }
    setCart(savedCart)
},[products])



   const handleClick = (selectedProduct) => {
//    console.log(product)
    // cart.push(product)

    let newCart = []
    const exists = cart.find(product => product.id === selectedProduct.id); 
    if(!exists){
        selectedProduct.quantity = 1; 
        newCart= [...cart, selectedProduct]
    }
    else {
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists + 1;
        newCart = [...rest, exists]
    }
    // const newCart = [...cart, selectedProduct]; 
    setCart(newCart)
    addToDb(selectedProduct.id)
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