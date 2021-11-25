import React, { useState } from 'react'
import AmountButton from './AmountButton'

const Cart = ({cart,setCart}) => {
     const toggleCartAmount = (id, value) => {
       if (value === "inc") {
         setCart(
           cart.map((item) => {
             if (item.id === id) {
               return { ...item, amount: item.amount + 1 };
             }
             return item;
           })
         );
       }
       if (value === "dec") {
         setCart(
           cart.map((item) => {
             if (item.id === id) {
               return { ...item, amount: item.amount - 1 }
             }
             return item
           }).filter((item) => item.amount !== 0)
         )
       }
     };

     const getTotal=()=>{
        const total = cart.reduce((cartTotal,item)=>{
            const price = item.amount*item.price
            cartTotal.total += price
            console.log(cartTotal.total);
            return cartTotal
        },{total:0})
        return total
     }

    const{total}= getTotal()
    

    return (
        <div className='cart-container'>
        <h1 className="title">Cart</h1>
        {cart.length>0?
        cart.map((cartItem,index)=>{
            return (
              <>
                <div className="cart-product-wrapper" key={index}>
                  <h2 className="cart-product-name" key={cartItem.id}>
                    {cartItem.name}
                  </h2>
                  <AmountButton
                    amount={cartItem.amount}
                    setAmount={toggleCartAmount}
                    id={cartItem.id}
                    key={cartItem.id*10}
                  />
                  <span className="cart-product-price">Price : {cartItem.price}</span>
                </div>
              </>
            );
        })
        :<h4 className='cart-mssg'>You have nothing to see</h4>}
        <h4 className="total">total:{total}</h4>
        <button className="checkout-btn">Checkout</button>

        </div>
    )
}

export default Cart
