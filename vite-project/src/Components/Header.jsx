import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { 
    AiOutlineSearch,
     AiOutlineHeart, 
     AiOutlineShoppingCart,
     AiOutlineUserAdd } from 'react-icons/ai'
import Reg from './Auth/Auth'
import { useSelector } from 'react-redux'
export const Header = () => {
    const user = useSelector(state=>state.cart.user)
    const myCart = useSelector(state=>state.cart.cart)
    const [auth, setAuth] = useState(false)
    const nav = useNavigate()
  return (
    <div className='Header'>
        <div className='headerWrapper'>
            <div className="pageName">
            <h1>Kareems</h1><h1 className='ReduxLogo'>RexShop</h1>
            </div>
            <nav className='headerNav'>
                <ul>
                    <Link to={'/'} style={{color:"black", textDecoration:"none"}}>
                    <li>Home</li>
                    </Link>
                    <li>Service</li>
                    <li>News</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className='headerIcons'>
                <AiOutlineHeart  className='Icons'/>
                <AiOutlineSearch  className='Icons'/>
                <AiOutlineShoppingCart  className='Icons' onClick={()=>{nav('/cartpage')}}/> <span className='cartNumber'>{user.name === ""?0:myCart.length}</span>
                {
                user.name === "" && user.id === ""? <AiOutlineUserAdd  className='Icons' onMouseOver={()=>{
                    setAuth(!auth)
                }}/>: <div className='Profile'  onMouseOver={()=>{
                    setAuth(!auth)
                }}>{user.name.charAt(0)}</div>
               }
                {
                    auth?<Reg authication={setAuth}/>:null
                }
            </div>
        </div>
    </div>
  )
}
export default Header
