import React from 'react'
import "./Home.css"
import Header from "../components/Header"
import Body from '../components/Body';


function Home() {
  return (
    <div className='home'>
        
        {/*Header*/}
        <Header/>

        {/* Body */}
        <Body/>

        
    </div>
  )
}

export default Home