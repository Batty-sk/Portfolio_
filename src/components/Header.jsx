"use client"
import React from 'react'
import { HEADER_NAV } from '../constants'
import { useEffect,useState } from 'react'
const Header = () => {
  const [color,setColor] = useState([0,'rgb(59 130 246)'])


  useEffect(()=>{
    const handleScroll=()=>{
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / sectionHeight);
      handleColorSwitch(currentSection)
    }

    const handleColorSwitch = (currentSection)=>{
      switch(currentSection){
        case 0:
          setColor([0,'rgb(59 130 246)'])
          break
        case 1:
          setColor([1,'#f9f7cd'])
          break
        case 2:
          setColor([2,'indigo'])
          break;
        case 3:
            setColor([3,'yellow'])
            break;
        default:
          setColor([3,'yellow'])
      }
    }

    if(window){
      window.addEventListener('scroll',handleScroll)
    }
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <header className='fixed top-0 w-full z-50'>
        <nav className='p-4'>
            <ul className='flex md:justify-end md:flex-row flex-col  items-end  md:gap-2 gap-1'> 
                {HEADER_NAV.map((x,i)=>
                 <a href={x} key={i}>
                <li className='w-8  h-8 rounded-full header-circles block hover:bg-yellow-300 transition-all duration-300 cursor-pointer  ' key={i} style={{
                  background:`${i==color[0]?color[1]:'rgb(244,244,245)'}`
                }}></li>
               </a>
                )}
</ul>
        </nav>
    </header>
  )
}

export default Header