import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import "./Project.css"
import { PROJECTS } from '../constants'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { githubsocial, link } from '../assests'
import useIsMobile from '../useIsMobile'

const Carosuel = ({next}) => {
  const isMobile =useIsMobile()
  const [animate, setAnimate] = useState(next)
  useEffect(()=>{setAnimate(next)},[next])
  useEffect(()=>{
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo('.projectds-cards',{
        x:-500,
      },
    {
      x:0,
      stagger:0.2,
      duration:0.5,
      ease:'shine',
      scrollTrigger:{
        trigger:'#projects',

      }

    })
    
  
  },[])

  const handleClick = (event,i)=>{
    console.log('clicked',event.target)
   const click= new Audio('/ps4-select-button.mp3')
    click.play()
    console.log('brohh')
    setAnimate(i)
  }

  return (
    
    <div className='relative w-[90%] max-h-full md:p-0   border border-white flex justify-center '>
        {PROJECTS.map((x,i)=>{
          return(
            <div key={i} onClick={(x)=>handleClick(x,i)}  className={`absolute  cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-500 hover:scale-105  projects-cards md:w-80 w-[17rem] flex flex-col justify-center shadow-md transform shadow-black items-center -translate-x-1/2 bg-zinc-200 rounded-md  pt-10  -translate-y-1/2 right-1/2 `} style={{
              left:isMobile?`${60-(i*3)}%`:`${60-(i*8)}%`,
              rotate:isMobile?`-${i*3}deg`:`-${i*5}deg`,
              zIndex:`${animate==i?99:50-(i*10)}`,
              animationDelay:i+1+'ms',
              
            }}>
             <div className='relative w-full h-full flex flex-col md:gap-3 gap-0 justify-center items-center'>
              <div className='md:w-56 md:h-[16rem] w-48 h-[16rem] block bg-zinc-200 overflow-hidden '>
                <Image src={x.image} alt={x.name} className='object-scale-down'></Image>
              </div>
              <div className='md:p-3 flex justify-center items-center md:gap-2'>
                <a href={x.github} target='_blank' className='w-fit h-fit transition-all duration-150 rounded-full hover:bg-zinc-300'>
                <Image src={githubsocial} width={30} height={30} alt='github'></Image>
                </a>
              <h3 className=' text-white bg-black rounded-md p-2 m-3 font-mono text-center'>{x.name}</h3>
              <a href={x.link} target='_blank' className='w-fit h-fit transition-all duration-150 rounded-full hover:bg-zinc-300'>
              <Image  src={link} width={30} height={30} alt='github'></Image>
              </a>
  </div>
          </div>
          </div>)

        })}
       

    </div>
  )
}

export default Carosuel