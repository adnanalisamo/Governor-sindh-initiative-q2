'use client'
import { useRouter } from 'next/navigation'; 
import React from 'react'

export const Contact = () => {
    const route= useRouter();
  return (
    <div>
        <h1> contact </h1>
          <button style={buttonStyle} onClick={()=>route.push("/footer")}>back to Homepage</button>
    </div>
  )
}

const buttonStyle={
    padding:'10px 20px',
backgroundColor:'blue',
color:'white',
border:'none',
borderRadius:'5px',
cursor:"pointer",
fontSize:'16px'
}
 export default Contact