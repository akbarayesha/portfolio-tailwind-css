import React from 'react'
// import Image from 'next/image'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover sm:bg-center sm:pt-10 md:bg-center rounded-half '
    style={{backgroundSize: "25%", backgroundPosition: "left 100px top 100px",}}
    >
     
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:pb-10 sm:text-[100px] font-bold leading-tight flex justify-left items-center pt-10'>
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p className="text-pink-600" data-aos="zoom-in-up">Ayesha</p>
            <p className="text-pink-600" data-aos="zoom-in-up">Akbar</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
