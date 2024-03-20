import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Products() {
const[Products,setProducts]=useState([])
    
let con={
    "companyName": "goMart",
    "ownerName": "Rahul",
    "rollNo": "1",
    "ownerEmail": "rahul@abc.edu",
    "accessCode": "FKDLjg"
    }

    const[constomer,setcustomer]=useState({})
    axios.post("http://20.244.56.144/products/register",con).then((res)=>setcustomer(res)).catch(err=>console.log(err))
    console.log(constomer)
    // const[data,setdata]=useState({})
    //  axios.post("http://20.244.56.144/products/auth",constomer).then((result)=>setdata(result.data)).catch((err)=>console.log(err))
    //  useEffect(() => {
    // async function getsProducts() {
    // const response = await axios.get("http://20.244.56.144/products/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q",{ headers: { Authorization: `Bearer ${data.access_token}` } });
    // setProducts(response.data);
    // } getsProducts(); }, []);
    // console.log(Products)
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <div class="card" style={{width:"18rem"}}>
           <img src="..." class="card-img-top" alt="..."/>
       <div class="card-body">
    <h5 class="card-title">Products</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Products