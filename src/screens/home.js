import React from 'react'
import { product } from '../components/product';
import '../App.css';
import './home.css';
import { products } from '../products';
import { useNavigate } from "react-router";

export const Home = () => {
    let navigate = useNavigate();

    const productAdd = (p)=>{
        navigate(`/product/${p.id}`,p)
    }

    return (
        <div className='main_container'>
            <h2 className='product-section-title'>BIKE COVERS</h2>
            <div className='product-section'>
                {products.map(p => product({
                    key:p.name,
                    imgLink: p.imgLink,
                    name: p.name,
                    description: p.description,
                    price: p.price,
                    handleClick: () => productAdd(p),
                    btnText:`Add to Cart`
                })
                )}

            </div>
        </div>
    )
}