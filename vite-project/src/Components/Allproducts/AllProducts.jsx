import React from 'react'
import { 
   AiOutlineHeart, 
   AiOutlineShoppingCart
  } from 'react-icons/ai'
import './Allproduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddCart, allApiData } from '../Redux/ProductState'
import axios from 'axios'
function AllProducts() {
  const myCart = useSelector(state=>state.cart.cart)
  const ApiDatas = useSelector(state=>state.cart.products)
  const Dispatch = useDispatch()
  const nav = useNavigate()
  const getAllData = () => {
  const url = "https://fakestoreapi.com/products"
  axios.get(url)
 .then(res=> Dispatch(allApiData(res.data)))
  }
  console.log(ApiDatas);
  
  const addToCart = (e) => {
    Dispatch(AddCart(e))
    // localStorage.setItem("cartDetails", JSON.stringify(myCart))
    console.log(myCart)
  }

  
useEffect(()=>{
 getAllData()
},[])

  return (
    <div className='AllProductsContainer'>
      {
        ApiDatas?.map((e)=>(
          <div className="hoverObj" key={e.id}>
        <div className='hoverIcons'>
        <div className='IconDiv'>
        <AiOutlineShoppingCart className='Iconss' style={{fontSize:"40px", cursor:"pointer"}}/>
        </div>
        <div className='IconDiv'>
        <AiOutlineHeart className='Iconss' style={{fontSize:"40px", cursor:"pointer"}}/>
        </div>
        <div className='IconDiv'>
          
        </div>
        </div>
      <div className="CardsContent">
        <div className="imageDiv">
        <img src={e.image} alt="" />
        </div>
        <div className="CardDetails">
          <div style={{width:"100%", paddingLeft:"5%", height:"35%"}}>
          <h4>{e.title.slice(0,e.title.length>40 ? 28:30)}..</h4>
          <h4 style={{color:"red"}}>$: {e.price}</h4>
          </div>
          <div className='ViewButtonContainer'>
          <button className='AddToCart' onClick={()=>{addToCart(e)}}>Add to Cart</button>
          <button className='viewBtn' onClick={()=>{nav('/detailpage')}}>View Item</button>
          </div>
        </div>
      </div>
      </div>
        ))
      }
      
    </div>
  )
}

export default AllProducts