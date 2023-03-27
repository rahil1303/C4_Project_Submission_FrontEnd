import React from 'react'
import { addToCart, removeItemFromCart } from '../redux/CartSlice';
import './ProductItem.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function ProductItem({item}) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  }

  const removeItemFromCart = (item) => {
    dispatch(removeItemFromCart(item))
  }

  return (
    <div className='productItem'>
      
        {/* image */}
        <img style={{width:200,height:200,marginleft:"auto",marginright:"auto"}} src = {item.image}/>

        {/* title of the product */}
        <p>{item.title.length > 30 ? item.title.substr(0,30) : item.title}</p>

        {/* description of the product */}
        <p>{item.description.length > 60 ? item.description.substr(0,60) : item.description}</p>

        <p>{item.price}</p>


        {/* Add to Cart Button */}
        {cart.some((x) => x.id === item.id) ? (
          <button onClick={() => removeItemFromCart(item)} className='productItemButton'> Remove from Buy Now </button>
        ) : (
          <button onClick={() => addItemToCart(item)} className='productItemButton'> Buy Now </button>
        )
        
      }
      

    </div>
  )
}

export default ProductItem