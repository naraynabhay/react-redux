import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

  

const Cart = () => {

  const {cart}= useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=>acc+curr.price ,0));
  },[cart])
  return (<div>
    {
      cart.length>0?(
       <div className="flex justify-center mt-4 gap-6">
         <div >
          {
            cart.map((item,index)=>{
              return <CartItem key={item.kid} item={item} itemIndex={index}/>
            })
          } 
         </div>
         <div className="flex flex-col justify-between mb-9">
           <div>
             <div>Your Cart</div>
              <div> summary </div>
                <p>
                 <span> Total item :{cart.length}</span>
                </p>
            </div>
            <div>
              <p>total amount :$  {totalAmount}</p>
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in">
                <p>checkout now</p>
              </button>
            </div>
         </div>
       </div>
      ):
      (
        <div>
          <h1> empty cart</h1>
          <NavLink to={"/"}>
            <h1>start wishlisting</h1>
          </NavLink>
        </div>
      )
    }
    
  </div>
  );
};

export default Cart;
