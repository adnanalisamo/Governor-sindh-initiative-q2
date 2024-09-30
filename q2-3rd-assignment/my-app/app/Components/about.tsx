'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export const About = () => {
    const route= useRouter();
  return (
    <div>
        <h1> About </h1>
          <button style={buttonStyle} onClick={()=>route.push("/")}>back to home</button>
    </div>
  )
}

const buttonStyle={
 backgroundColor:'blue',
 color:'white',
 padding:'10px 20px',
 cursor:'pointer',
 fontSize:'16px',
 border:'none',
 borderRadius:'12px'
}

export default About