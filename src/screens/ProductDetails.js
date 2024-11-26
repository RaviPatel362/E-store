import React, { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useParams } from 'react-router';
import "./ProductDetails.css"
import { useCart } from '../hooks/useCart';
import { useNavigate } from "react-router";

export const ProductDetails = () => {
  let navigate = useNavigate();
  const { getProductById } = useProducts();
  const { setCartItems } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [value, setValue] = useState(0);  
  const [error, setError] = useState(false); 

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);  
  };

  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));  
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setValue(Number(newValue));
    }
  }


  const updateProduct = () => {
    const p = getProductById(id);
    if (p) {
      {
        setProduct(p);
      }
    }
  }

  const handleAddCart = (p, count) => {
    if (count <= 0) {
      setError(true);
      return;
    }
    const item = { ...p, count }
    setCartItems(item);
    if (window.confirm(`You have successfully buy ${count}  ${p.name}s for RS. ${count * p.price}/-.`))
      navigate(`/`)
  }

  useEffect(() => {
    setTimeout(updateProduct)
  }, []);

  useEffect(()=>{
    setError(false);
  },[value]);
  return (
    <div className='main_container product-details'>
      <div className='product'>
        <img src={product?.imgLink} className='product-img' />
        <div className='product-text'>
          <h3>{product?.name?.toUpperCase()}</h3>
          <h3> RS.{product?.price} /-</h3>
          <p className='product-desc'>{product?.description}</p>
          <div style={{ flexDirection: `row`, gap: `10px` }}>
            <button onClick={handleDecrement} className='product-btn small'>-</button>
            <input
              type="number"
              value={value}
              onChange={handleChange}
              min="0"
              className='product-input'
            />
            
            <button onClick={handleIncrement} className='product-btn small'>+</button>
          </div>
          {error && <p style={{color:`red`}}>Please Add Quantity to Buy</p>}
          <button className='product-btn' onClick={() => handleAddCart(product, value)}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}