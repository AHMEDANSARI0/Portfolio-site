import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/myphoto.png)] bg-left bg-cover'
    style={{backgroundSize: "cover"}}
    >
      <Navbar/>
      <div className='container grid lg-grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[1000px] sm:text-[130px] font-bold leading-tight flex justify-left items-left'>
          <div>
            <p>Portfolio</p>
            <p>Ahmed</p>
            <p>Ansari</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Hero