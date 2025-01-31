import React, { useState } from 'react'
import "./Project.css"
import Carosuel from './Carosuel'
import Image from 'next/image'
import { mespace,rightArrow } from '../assests'

export const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const top = Math.random() * 100; 
    const left = Math.random() * 100;
    const delay = Math.random() * 2; 
    stars.push({ id: i, top, left, delay });
  }
  return stars;
};
const stars = generateStars(100);

const Project = () => {
  const [next,setNext] = useState(0)
  const handleNext = ()=>{

      setNext((next+1)%4)
      const click= new Audio('/ps4-select-button.mp3')
      click.play()
  }
  return (
    <section className='md:h-[140vh] relative rounded-tl-3xl rounded-tr-3xl h-screen universe-background-rev rounded-bl-3xl rounded-br-3xl ' id='projects'>

        <div className=' flex justify-center ocean gap-1 pt-10'>
          <Image src={mespace} width={68} height={68} alt='.' className=''></Image>
            <h1 className='text-white md:text-4xl text-2xl text-center font-mono font-bold md:first-letter:text-6xl first-letter:text-3xl'>Projects</h1>
        </div>
        <div className='flex justify-center  ' > <Image src={rightArrow} height={80} onClick={handleNext} width={80} className='transition-all duration-150 cursor-pointer hover:scale-125 z-[99]' alt=''></Image></div>


        <div className='flex flex-col justify-center items-center h-full pb-11 md:-mt-32 -mt-20 '>

        <Carosuel next={next}/>

        </div>
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
    </section>
  )
}

export default Project