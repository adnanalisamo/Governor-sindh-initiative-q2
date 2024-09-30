
import Link from 'next/link'
import React from 'react'

export default function Homepage(){
  return (
    <div>
      Home page <br/>
      <Link href="/about">Go  to about page</Link>
      <br/>
      <Link href="/footer">Go to footer page</Link> 
      <br/>
      <Link href="/contact">Go to contact page</Link>
      <br/>
      <Link href="/navbar">Go to navbar page</Link>
     
      
    </div>
  )
}