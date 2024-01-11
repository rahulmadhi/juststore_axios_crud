import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Product = () => {

    let navigate = useNavigate() ; 
    let [pname , setPname] = useState("")
    let [pprice , setpprice] = useState("")
    let [pqty , setpqty] = useState("")

    let addproduct = (e)=>{
        e.preventDefault()
        let payload = {
            pprice,pname , pqty
        }
        axiosInstance.post("/posts" , payload)
        toast.success(`${pname} added successfully!`)
        navigate("/")
        
    }

  return (
    <div className='form-block'>
       <form  action="" style={{textAlign:"center"}}>
            <fieldset>
                    <legend>ADD PRODUCT</legend>
                    <br /> <br />
                    <label htmlFor="">Product Name : </label>
                    <input type="text" onChange={(e)=>{
                            setPname(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Product Qty : </label>
                    <input type="text" onChange={(e)=>{
                            setpqty(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Product Price : </label>
                    <input type="text" onChange={(e)=>{
                            setpprice(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={addproduct}>ADD  </button>
                    <br /><br />
            </fieldset>
       </form>
    </div>
  )
}

export default Product
