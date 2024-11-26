import React from 'react';
import './product.css'

export const product = (
    {
        imgLink,
        name,
        description,
        price,
        handleClick,
        btnText
    }
) => {
  return (
    <div className='product'>
        <img  src={imgLink} className='product-img'/>
        <div className='product-text'>
            <h3>{name.toUpperCase()}</h3>
            <h3> RS.{price} /-</h3>
            <p className='product-desc'>{description}</p>
            <button className='product-btn' onClick={handleClick}>{btnText ? btnText : `BUY NOW`}</button>
        </div>
    </div>
  )
}