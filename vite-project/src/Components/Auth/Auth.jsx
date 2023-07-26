import React from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'
import { userData } from '../Redux/ProductState'
import { useDispatch, useSelector } from 'react-redux'
function Auth({authication}) {
  const user = useSelector(state=>state.cart.user)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const signOut = () => {
    nav('/login')
    dispatch(userData({
      email:"",
      id:"",
      name:""
    }))
  }
  return (
    <div className='AuthDiv' onMouseLeave={()=>{
        authication(false)
    }}>
        {
          user.name === "" && user.id === ""?
          <>
            <h3 onClick={()=>{nav('/login')}}>Log in</h3>
            <h3 onClick={()=>{nav('/signup')}}>Sign up</h3>
          </>:<h3 onClick={signOut}>Sign out</h3>
        }
    </div>
  )
}

export default Auth