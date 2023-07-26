import React, { useEffect } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { RemoveCart } from '../Redux/ProductState'
import { useDispatch, useSelector } from 'react-redux'
import { min_Qty } from '../Redux/ProductState'
import { AddCart } from '../Redux/ProductState'
import './CartPage.css'
import WomensClothing from '../WomensClothing/WomensClothing'

function CartPage() {
  const myCart = useSelector(state=>state.cart.cart) 
  const quantities = useSelector(state=>state.cart.Qty)
  const Dispatch = useDispatch()

    const RemoveFromCart = (id) => {
    Dispatch(RemoveCart(id))
    console.log(myCart)
  }

  const addQty = (e) => {
    Dispatch(AddCart(e))
    // localStorage.setItem("cartDetails", JSON.stringify(myCart))
    console.log(quantities)
  }

  const minQty = (e) => {
    Dispatch(min_Qty(e))
    // localStorage.setItem("cartDetails", JSON.stringify(myCart))
    console.log(quantities)
  }

    const TotalPrice = myCart.reduce((prev, curr)=>prev + (curr.price * curr.Qty),0)
    console.log(myCart)

    const menCategory = myCart.filter((e)=>e.category === "men's clothing")
    const woMenCategory = myCart.filter((e)=>e.category === "women's clothing")
    const electronicsCategory = myCart.filter((e)=>e.category === "electronics")
    const jewelryCategory = myCart.filter((e)=>e.category === "jewelery")

    function categorysLength(category) {
      return category.length
    }
    const mensTotal = menCategory.reduce((prev, curr)=>prev + (curr.price * curr.Qty),0)
    const womensTotal = woMenCategory.reduce((prev, curr)=>prev + (curr.price * curr.Qty),0)
    const elecsTotal = electronicsCategory.reduce((prev, curr)=>prev + (curr.price * curr.Qty),0)
    const jewsTotal = jewelryCategory.reduce((prev, curr)=>prev + (curr.price * curr.Qty),0)

    // console.log(menCategory, WomensClothing, jewelryCategory, electronicsCategory);
  return (
    <div className='CartContainer'>
      <div className="CartTitle" style={{display:"flex"}}>
      <h1>My Cart</h1>
      {myCart.length === 0 ? <h1>No Item In Cart </h1>:<h1>Total: $ {TotalPrice.toFixed(2)}</h1>}
      </div>
      <div className='CartWrapper'>
        <div className='CartDetails'>
       {
        myCart?.map((e)=>(
          <div className="ItemInCart" key={e.id}>
          <div className='Image'>
            <div className='DelBtn'>
            <RiDeleteBin6Line  style={{fontSize:"25px", color:"red", cursor:"pointer"}} onClick={()=>RemoveFromCart(e)}/>
            </div>
            <div className='ItemImg'>
              <img src={e.image} alt="" />
            </div>
          </div>
        <div className='ItemDetails'>
          <div className='ItemName'>
              <h2>Name</h2>
              <h3>{e.title.slice(0,e.title.length>67 ? 67:null)}</h3>
              </div>
              <div className='ItemPrice'>
              <h2>Price</h2>
              <h3>$:{e.price}</h3>
              </div>
            <div className='ItemQuantity'>
            <h2>Quantity</h2>
            <div style={{fontSize:"17px",fontWeight:"bold", display:"flex"}}>
               <button className='QtyBtn'onClick={()=>{minQty(e)}}>-</button>
               {e.Qty}
               <button className='QtyBtn' onClick={()=>{addQty(e)}}>+</button>
            </div>
            </div>
            <div className='ItemTotal'>
            <h2>Total</h2>
            <h3>$:{(e.price * e.Qty).toFixed(2)}</h3>
            </div>
        </div>
       </div>
        ))
       }
        </div>
        <div className='ExtraInfo'>
          <h1>Summary</h1>
          <h2>Items Category</h2>
          <div style={{height:"100%",width:"100%" ,display:"flex", flexDirection:"column"}}>
            <article style={{width:"100%", display:"flex", justifyContent:"space-between", paddingInline:"19px"}}>
                 <div style={{gap:"2px"}}>
                 <h2>Men</h2> <h3 style={{color:"darkblue"}}>:  {categorysLength(menCategory)}</h3>
                 </div>
                 <div style={{display:"flex",flexDirection:"column", textAlign:"center", gap:"2px"}}>
                  <h2>Prices</h2>
                  <h3 style={{color:"darkblue"}}>$:{mensTotal.toFixed(2)}</h3>
                  </div>
            </article>
             <article style={{width:"100%", display:"flex", justifyContent:"space-between", paddingInline:"19px"}}>
                  <div style={{gap:"2px"}}>
                  <h2>Women</h2> <h3 style={{color:"darkblue"}}>:  {categorysLength(woMenCategory)}</h3>
                  </div>
                  <div style={{display:"flex",flexDirection:"column", textAlign:"center", gap:"2px"}}>
                  <h2>Prices</h2>
                  <h3 style={{color:"darkblue"}}>$:{womensTotal.toFixed(2)}</h3>
                  </div>
             </article>
             <article style={{width:"100%", display:"flex", justifyContent:"space-between", paddingInline:"19px"}}>
                 <div style={{gap:"2px"}}>
                 <h2>Jewelry</h2> <h3 style={{color:"darkblue"}}>:  {categorysLength(jewelryCategory)}</h3>
                 </div>
                 <div style={{display:"flex",flexDirection:"column", textAlign:"center", gap:"2px"}}>
                  <h2>Prices</h2>
                  <h3 style={{color:"darkblue"}}>$:{jewsTotal.toFixed(2)}</h3>
                  </div>
             </article>
             <article style={{width:"100%", display:"flex", justifyContent:"space-between", paddingInline:"19px"}}>
                  <div style={{gap:"2px"}}>
                  <h2>Electronics</h2> <h3 style={{color:"darkblue"}}>:  {categorysLength(electronicsCategory)}</h3>
                  </div>
                  <div style={{display:"flex",flexDirection:"column", textAlign:"center", gap:"2px"}}>
                  <h2>Prices</h2>
                  <h3 style={{color:"darkblue"}}>$:{elecsTotal.toFixed(2)}</h3>
                  </div>
             </article>
          </div>

          <div className='SummaryPrice'>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartPage