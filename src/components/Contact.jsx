import React, { useState } from 'react'
import { moon } from '../assests'
import Image from 'next/image'
import useIsMobile from '../useIsMobile'
import { generateStars } from './Project'
import { Dancing_Script } from 'next/font/google'


const DS_font = Dancing_Script({ subsets: ['latin'] ,weight: ['400', '700']})


const stars = generateStars(100)
const Contact = () => {
    const isMobile = useIsMobile()
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [message,setMessage ] =useState('')


     const handleSubmit = (e) => {
      e.preventDefault();
      const subject = `Message From ${email}`;
      const body = `name: ${name} Message: ${message}`;
      const mailtoLink = `mailto:saorav.skumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };
    
  return (
    <section className='h-fit pt-20 contact mt-5 relative pb-10 universe-background rounded-tl-3xl  rounded-tr-3xl' id='contact'>
           {stars.map((star) => (
        <div
          key={star.id}
          className='star'
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,

          }}
        ></div>
      ))}
    <div className='relative '>
    <div className='md:text-4xl text-2xl font-mono text-white text-center font-bold p-5 relative md:first-letter:text-6xl  first-letter:text-3xl first-letter:font-extrabold z-10' style={{color:'lavenderblush'}}>Contact Me</div>
    {isMobile?null:<div className='img-container rotate absolute top-10 left-10 z-0 '> 
        <Image src={moon} alt='moon' height={''} width={''} className='md:h-[200px] md:w-[200px] h-[150px] w-[150px] '></Image>
    </div>}

     <div className='contact-form flex justify-center'>
     <form onSubmit={handleSubmit} className="bg-[#ffffff15] float text-white  contact-forms relative z-20 font-mono md:w-[70%] w-[90%] p-8 rounded-lg shadow-lg max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 rounded  bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            id="name"
            value={name}
            onChange={(x)=>{setName(x.currentTarget.value)}}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 rounded bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            id="email"
            value={email}
            onChange={(x)=>{setEmail(x.currentTarget.value)}}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 rounded  bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            id="message"
            rows="5"
            value={message}
            onChange={(x)=>{setMessage(x.currentTarget.value)}}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-black hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
     </div>
    <div className={`pt-5 mt-5 ${DS_font.className} text-center text-white`}><p>Saorav.skumar@gmail.com</p>
     <p>+91 9730129156</p>
    </div>
    </div>
    </section>
  )
}

export default Contact

