import React, { useEffect, useState} from 'react'
import './SignUp.css'
import { SpinnerCircularSplit } from 'spinners-react'
import { 
    AiOutlineUserAdd,
    AiOutlineShoppingCart } from 'react-icons/ai'
    import { MdOutlineMarkEmailUnread } from 'react-icons/md'
    import { BiSolidLock, BiSolidHide, BiSolidShow } from 'react-icons/bi'
    // import { userData } from '../Redux/ProductState'
    import { useNavigate } from 'react-router-dom'
    import axios from 'axios'
    import { useDispatch, useSelector } from 'react-redux'
function SignUp() {
    const nav = useNavigate()
    const Dispatch = useDispatch()
    // const userDatas = useSelector(state=>state.persistedReducer.users)
    const [showAdmin, setShowAdmin] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [confirm, setConfirm] = useState('');
    const[loading, setLoading] = useState(false)
    const [message, setmessage] = useState({error:false, value: "",  msg:""})

    const SignUpData = {name, email, password}
    console.log(SignUpData);
    console.log(name, email, password);

    const url = "https://eflexshop.onrender.com/user/register"

    // function postUserData(){
        
        const SignUpUser = (e) => {
            e.preventDefault()
            if(!name){
            setmessage({error:true, value: "name", msg:"*Input your name"})
        setLoading(false)
            // setmessage("")
            console.log(message);
        } else if(!email){
            setmessage({error:true, value: "email", msg:"*Input your email"})
        setLoading(false)
            // setmessage("")
            console.log(message);
        }else if(!password){
            setmessage({error:true, value: "password", msg:"*Input your password"})
        setLoading(false)
        console.log(message);
        }else if(!confirm){
            setmessage({error:true, value: "cpas", msg:"*Input your confirmPassword"})
        setLoading(false)
        console.log(message);
        }else if(password !== confirm){
            setmessage({error:true, value: "paasworderror", msg:"*password does not match"})
        setLoading(false)
        console.log(message);
        }else if(password.length < 8){
            setmessage({error:true, value: "passlenght", msg:"* your password most be 8 c"})
            setLoading(false)
            console.log(message);
        }
        else{
            setmessage("")
        setLoading(true)

        axios.post(url,SignUpData)
        .then(res=> {
            console.log(res)
            Dispatch(userData(res.data.data))
            nav("/")
        })
        .catch((err)=>{
            console.log(err.response.data.errors)
            setmessage({error:true, value: "email", msg: err.response.data.errors[0].msg})
            setLoading(false)
        })

        } }
        // console.log(userDatas);

  return (
    <div className='SignUpContainer'>
    <div className="SignUp">
        <div className="SignUplogoPart">
            <img src="./src/assets/330-3307216_letter-k-transparent-background-png-letter-k-transparent-removebg-preview.png" alt="" />
        </div>
       <div className='DetailsContainer'>
       <div className="pageNameLogIn">
        <h1>Kareems</h1><h1 className='ReduxLogoLogIn'>RexStore</h1>
        </div>
       <div className="DetailsPart">
          <div className='HeaderPart'>
             <h2>Sign Up with Us</h2>
          </div>
          <div className='InputPart'>
            <div className="EmailInput" style={{position:"relative"}}>
                   <MdOutlineMarkEmailUnread style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/> 
            <input type="Email" placeholder='Enter your Email' value={email} className='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            {
                message.value==='name'?<span style={{color:"red", fontSize:"12px"
            }}>{message.msg}</span>:null
            }
            </div>

            <div className="EmailInput" style={{position:"relative"}}>
                   <AiOutlineUserAdd style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/> 
            <input type="Email" placeholder='Enter your Username' value={name} className='Email' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            
            <div className="PasswordInput" style={{position:"relative"}}>
                    <BiSolidLock style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/>
                 <input type= {showPassword?"password":"text"} value={password} placeholder='Enter your Password' className='Password' onChange={(e)=>{setPassword(e.target.value)}}/>   
                {
                    showPassword?<BiSolidHide className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>:
                    <BiSolidShow className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>
                }
            </div>

            <div className="PasswordInput" style={{position:"relative"}}>
                    <BiSolidLock style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/>
                 <input type= {showPasswordConfirm?"password":"text"} value={confirm} placeholder='Confirm your Password' className='Password'  onChange={(e)=>{setConfirm(e.target.value)}}/>   
                 {
                    showPasswordConfirm?<BiSolidHide className='ShowPassword' onClick={()=>setShowPasswordConfirm(!showPasswordConfirm)}/>:
                    <BiSolidShow className='ShowPassword' onClick={()=>setShowPasswordConfirm(!showPasswordConfirm)}/>
                }
            </div>

            {
                showAdmin?
                <>
                    <div className="PasswordInput" style={{position:"relative"}}>
                    <AiOutlineUserAdd style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/>
                 <input type= "text" placeholder='Company Name' className='Password'/>   
                <AiOutlineShoppingCart className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>
            </div>

            <div className="PasswordInput" style={{position:"relative"}}>
                    <AiOutlineUserAdd style={{fontSize:"35px", position:"absolute", top:"19%", left:"11%"}}/>
                 <input type= "text" placeholder="Company's Address" className='Password'/>   
                <AiOutlineShoppingCart className='ShowPassword' onClick={()=>setShowPassword(!showPassword)}/>
            </div>
                </>:
                null
            }

            <div className='SignUpDiv'>
               <div className='Seller'>
               <input type="checkbox" className='checkBox'onClick={()=>{setShowAdmin(!showAdmin)}}/> <span>Register as a Vendor</span>
               </div>
                <button className='SignUpBtn' onClick={SignUpUser}>
                    <SpinnerCircularSplit style={{position:"absolute", left:"43%", top:"16%"}} size={"40px"} color='white' enabled={loading?true:false}/>{!loading? 'Sign Up':''}</button>
            </div>
          </div>
        </div>
       </div>
    </div>
</div>
  )
}

export default SignUp