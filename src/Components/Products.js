import React,{useState} from 'react'
import AmountButton from './AmountButton'

const Products = ({ title, products, setCart,cart,toggleAmount }) => {


  const addToCart=(id,name,price,amount)=>{
    setCart([...cart, { id: id, name: name, price: price, amount: amount }]);
    cart.forEach(item => {
      if (item.id === id) {
        setCart([...cart])
      }
    });
  }


  return (
    <div className="products">
      <div className="title">{title}</div>
      {products.map((product, index) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-img-wrapper" key={index + 1}>
              <img src={product.img} alt="" key={index + 2} />
            </div>
            <div className="info-wrapper" key={index + 3}>
              <h2 className="product-name" key={index + 4}>
                {product.name}
              </h2>
              <h3 className="product-price" key={index + 5}>
                {product.price}
              </h3>
              <AmountButton
                amount={product.amount}
                id={product.id}
                setAmount={toggleAmount}
                key={index + 6}
              />
              <div className="btn-wrapper">
                <button className="btn" onClick={()=>addToCart(product.id,product.name,product.price,product.amount)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products
