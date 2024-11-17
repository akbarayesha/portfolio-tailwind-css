import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-pink-600'  data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <IoMailUnreadOutline size={30} /> hafizaayeshaakbar717@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <BsTelephone size={30} /> 03137383732
            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input placeholder="Exm: Ayesha" type="text"
                className='h-[40px] bg-transparent border border-pink-600'
                id='name'/>
              </div>
              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input placeholder="Exm: hafizaayeshaakbar717@gmail.com" type="text"
                className='h-[40px] bg-transparent border border-pink-600'
                id='email'/>
              </div>
              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea placeholder="typing message"
                className='bg-transparent border border-pink-600'
                id="message" rows={8}>
                </textarea>
                </div>
                <button className='bg-pink-600 hover:bg-pink-500 p-2 px-8 rounded-2xl' data-aos="zoom-in-up">Send</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;