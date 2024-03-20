import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function cal() {
    const[res1,setres1]=useState({})
    const [Courses,setCourse]=useState([]);
    useEffect(() => {
     async function getsCourse() {
     const response = await axios.get("http://20.244.56.144/numbers/rand");
     setCourse(response.data);
     } getsCourse(); }, []);
  return (
    <div>cal</div>
  )
}

export default cal