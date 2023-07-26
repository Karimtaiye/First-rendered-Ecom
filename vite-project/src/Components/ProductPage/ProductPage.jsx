import React, { useState } from 'react'
import './ProductPage.css'
import AllProducts from '../AllProducts/AllProducts'
import Electronics from '../Electronics/Electronics'
import Jewelry from '../Jewelry/Jewelry'
import WomensClothing from '../WomensClothing/WomensClothing'
import MensClothing from '../MensClothing/MensClothing'

function ProductPage() {

    const [alProduct, setAlproduct] = useState(true)
    const [electronics, setElectronics] = useState(false)
    const [jewelry, setJewelry] = useState(false)
    const [women, setwomen] = useState(false)
    const [men, setMen] = useState(false)
  return (
    <>
        <div className="ProductPage">
        <nav className='ProductsCategory'>
            <ul>
                <li className={electronics?"Active":null} onClick={()=>{
                    setElectronics(true)
                    setAlproduct(false)
                    setJewelry(false)
                    setwomen(false)
                    setMen(false)
                }}>Electronics</li>
                <li className={women?"Active":null} onClick={()=>{
                    setElectronics(false)
                    setAlproduct(false)
                    setJewelry(false)
                    setwomen(true)
                    setMen(false)
                }}>Women's Clothing</li>
                <li className={men?"Active":null} onClick={()=>{
                    setElectronics(false)
                    setAlproduct(false)
                    setJewelry(false)
                    setwomen(false)
                    setMen(true)
                }}>Men's Clothing</li>
                <li className={jewelry?"Active":null} onClick={()=>{
                    setElectronics(false)
                    setAlproduct(false)
                    setJewelry(true)
                    setwomen(false)
                    setMen(false)
                }}>Jewelry</li>
                <li className={alProduct?"Active":null} onClick={()=>{
                    setElectronics(false)
                    setAlproduct(true)
                    setJewelry(false)
                    setwomen(false)
                    setMen(false)
                }}>See All</li>
            </ul>
        </nav>
    </div>
     <div className="Products">
        <div className="ProductCardsWrapper">
            {
                alProduct?<AllProducts />:
                electronics?<Electronics />:
                men?<MensClothing />:
                jewelry?< Jewelry />:
                women?<WomensClothing />:
                null
            }
        </div>
     </div>
    </>
  )
}

export default ProductPage