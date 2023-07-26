import React, { useEffect, useState } from 'react'
import './LogIn.css'
import { SpinnerCircularSplit } from 'spinners-react'
    import { MdOutlineMarkEmailUnread } from 'react-icons/md'
    import { BiSolidLock, BiSolidHide, BiSolidShow } from 'react-icons/bi'
    import { useDispatch, useSelector } from 'react-redux'
    import { useNavigate } from 'react-router-dom'
    import { userData } from '../Redux/ProductState'
    import axios from 'axios'

function LogIn() {
  const userInfo = useSelector(state=>state.cart.user)
  const colors = ["black","red","darkblue","aqua","yellow","orange","green", "grey"]
   const [count, setCount] = useState(0)
    const [showPassword, setShowPassword] = useState(true)
    const[loading, setLoading] = useState(false)
    const [btnDisable, setBtnDisable] = useState()
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const data = {email, password}
    const url = "https://eflexshop.onrender.com/user/login"
    const Login = (e)=>{
        e.preventDefault()
        axios.post(url, data)
        .then(res=> {
            console.log(res)
            nav("/")
            setBtnDisable(true)
            dispatch(userData({email:res.data.data.email, id:res.data.data._id, name:res.data.data.name, token:res.data.data.token}))
            console.log(userInfo)
            localStorage.setItem("userDetails", JSON.stringify(userInfo))
            setLoading(!true)
       
        })
        .catch((err)=>{
            console.log(err)
            setBtnDisable(false)
            // setLoading(!loading)
            // setmessage({error:true, value: "email", msg: err.response.data.errors[0].msg})
        })
      }
  
  localStorage.setItem("userDetails", JSON.stringify(userInfo)) 
  console.log(userInfo)   

   useEffect(()=>{
    setInterval(() => {
      setCount(prev=>prev+=1)
    }, 2000);

   },[])

  return (
    <div className='LogInContainer'>
        <div className="LogIn">
            <div className="LogInlogoPart" style={{background:colors[count % colors.length]}}>
            <img src="./src/assets/330-3307216_letter-k-transparent-background-png-letter-k-transparent-removebg-preview.png" alt="" />
            </div>
           <div className='LogInDetailsContainer'>
           <div className="pageNameLogIn">
            <h1>Kareems</h1><h1 className='ReduxLogoLogIn'>RexStore</h1>
            </div>
           <div className="DetailsPart">
              <div className='HeaderPart'>
                 <h2>Log In to your Account</h2>
              </div>
              <div className='LogInputPart'>
                <div className="LogInEmailInput" style={{position:"relative"}}>
                       <MdOutlineMarkEmailUnread style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/> 
                <input type="Email" placeholder='Enter your Email' value={email} className='Email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="LogInPasswordInput" style={{position:"relative"}}>
                        <BiSolidLock style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/>
                     <input type= {showPassword?"password":"text"} placeholder='Enter your Password' value={password} className='Password' onChange={(e)=>setPassword(e.target.value)}/>   
                 {
                  showPassword? <BiSolidHide className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>:
                  <BiSolidShow className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>
                 }
                </div>
                <div className='LogInDiv'>
                <button className='LogInBtn' onClick={(e)=>{Login(e)}} disabled={btnDisable} >
                    <SpinnerCircularSplit style={{position:"absolute", left:"43%", top:"16%"}} size={"40px"} color='white' enabled={loading?true:false} />{!loading? 'Log In':''}</button>
                </div>
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default LogIn