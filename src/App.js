import { useState } from "react";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import kabab from './images/kabab.jpg'
import paneer from './images/paneer.jpg'
import Roti from './images/Roti.jpg'


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "paneer tikka",
      price: 210,
      amount:1,
      img: paneer,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ipsum quod? Ex non at exercitationem. Labore quibusdam ut alias
              adipisci.`,
    },
    {
      id: 2,
      name: "Roti",
      price: 70,
      img: Roti,
      amount:1,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ipsum quod? Ex non at exercitationem. Labore quibusdam ut alias
              adipisci.`,
    },
    {
      id: 3,
      name: " Chicken",
      price: 210,
      img: kabab,
      amount:1,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ipsum quod? Ex non at exercitationem. Labore quibusdam ut alias
              adipisci.`,
    },
  ]);
  const [cart, setCart] = useState([]);


    const toggleAmount = (id, value) => {
      if (value === "inc") {
        setProducts(
          products.map((item) => {
            if (item.id === id) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          })
        );
      }
      if (value === "dec") {
        setProducts(
          products.map((item) => {
            if (item.id === id && item.amount > 1) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
        );
      }
    };



  return (
    <>
      <Navbar cart={cart} />
      <div className="coupon-container">
        <div className="coupon-wrapper">
          <h3 className="coupon">Less 10%</h3>
        </div>
        <div className="coupon-wrapper">
          <h3 className="coupon">Less 15%</h3>
        </div>
      </div>
        <div className="columns-wrapper">
        <Categories/>
        <Products title={'Recommended'} products={products} setCart={setCart} setProducts={setProducts} setCart={setCart} cart={cart} toggleAmount={toggleAmount} />
        <Cart cart={cart} setCart={setCart}  />
        </div>
    </>
  );
}

export default App;
