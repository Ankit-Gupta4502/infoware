import React,{useState} from 'react'

const AmountButton = ({amount,setAmount,id}) => {


    return (
      <div className="amount-container">
        <span className="amount-btn" onClick={()=>setAmount(id,'dec')} >-</span>
        <span className="amount">{amount}</span>
        <span className="amount-btn" onClick={()=>setAmount(id,'inc')} >+</span>
      </div>
    );
}

export default AmountButton
