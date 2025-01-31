import React, { useEffect,useRef } from 'react'
import Image from 'next/image'
import { cloud, pattern } from '../assests'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { WORK_EXPERIENCE } from '../constants';
import { Dancing_Script } from 'next/font/google'
import { me_ } from '../assests';


const DS_font = Dancing_Script({ subsets: ['latin'] ,weight: ['400', '700']})

const WorkExperience = () => {

    const containerRef = useRef(null);


    useEffect(()=>{
        if(containerRef == null)
            return
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#cloud1',
    {      
        x:-1000,
        duration: 1,
        ease:'sine.in',
        scrollTrigger:{
            trigger:'#w-experience',
            start: 'top center+=300px',
            end: 'bottom top',
            scrub: true,
        }
    })

    gsap.to('#cloud2',
        {      
            x:1000,
            duration: 1,
            ease:'sine.in',
            scrollTrigger:{
                trigger:'#w-experience',
                start: 'top center+=300px',
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to('#rounded-me',
            {      
                y:containerRef.current.offsetHeight,
                duration: 1,
                ease:'sine.in',
                scrollTrigger:{
                    trigger:'#w-experience',
                    start: 'top center+=100px',
                    end: 'bottom top',
                    scrub: true,
                }
            })
            gsap.fromTo('.exp-items',{
                y:150,
            },
                {     
                    y:0, 
                    opacity:1,
                    duration: 1,
                    stagger:0.5,
                    ease:'elastic.out',
                    scrollTrigger:{
                        trigger:'#w-experience',
                        start: 'top center+=100px',
                        end: 'bottom top+=200px',
                        scrub:true,
                    }
                })
    

    },[])
  return (
    <section className='md:h-screen h-[90vh] mt-3 overflow-hidden  ' id='w-experience' ref={containerRef}>
        <div className='relative flex justify-center'>
    <div className='text-black text-center p-3'>
        <h1 className=' font-mono font-bold  first-letter:text-5xl md:text-4xl text-3xl' style={{color:'darkslateblue'}}>Work Experience</h1>
        </div>
        <div className='clouds absolute left-[58%] z-10 transform -translate-x-1/2  -translate-y-5' id='cloud2'>
            <Image className='cloud' src={cloud} height={250} width={250} alt='cloud' >
            </Image>
        </div>
        <div className='clouds absolute left-[43%] z-10 transform -translate-x-1/2  -translate-y-5' id='cloud1'>
            <Image className='cloud' src={cloud} height={250} width={250} alt='cloud' >
            </Image>
        </div>
        </div>

        <div className='relative flex justify-center items-center h-full overflow-hidden'>
            <div className='absolute left-1/2 -translate-x-1/2 border top-0 bottom-0 w-2 border-[#865f5f] border-x-8 z-[1] rounded-tl-[50%] rounded-tr-[50%]'></div>
            <Image src={pattern} className='absolute z-0 -rotate-90' alt='ptrn'></Image>
            <div className='absolute left-1/2 -translate-x-1/2 border top-0 bottom-0 block h-20 w-20 rounded-full md:z-20 z-10' id='rounded-me' style={{    boxShadow: '1px 1px 5px crimson;'}}>
            <Image src={me_} alt='' className='h-full w-full rounded-full'></Image>
            </div>
            <div className=' font-mono exp-container h-full w-full md:pl-20 md:pr-20 p-1  flex flex-col md:justify-around justify-center md:gap-0 gap-12 items-center'>
                {WORK_EXPERIENCE.map((exp,i)=>{
                    if(i){
                    return <div className='text-start relative z-10 opacity-0 exp-items md:w-[50%] w-full  shadow-lg shadow-[#73a3ba]  text-black rounded-3xl    ml-[50%] pl-8' key={i}>
                       <div className=' p-3 '> 
                        <h3 className=' font-bold md:text-2xl text-1xl'  style={{color:'darkblue'}}>{exp.role}</h3>
                        <h3 className='font-bold'>Company: <span className='font-extralight'>{exp.company}</span></h3> 

                        <h3 className='font-bold'>Period: <span className='font-extralight'>{exp.duration}</span></h3> 
                       </div>

                    </div>
                    }
                 
                    return(
                    <div className='text-end relative z-10 opacity-0 exp-items  md:w-[50%] w-full  shadow-lg shadow-[#73a3ba] text-black rounded-3xl   bg-[#DBB5B5] mr-[50%] pr-8' key={i}>
                       <div className='p-3 '> 
                        <h3 className=' font-bold md:text-2xl  text-1xl ' style={{color:'darkblue'}}>{exp.role}</h3>
                        <h3 className='font-bold'>Company: <span className='font-extralight'>{exp.company}</span></h3> 

                        <h3 className='font-bold'>Period: <span className='font-extralight'>{exp.duration}</span></h3> 
                       </div>

                    </div>
                    )
                }
                )}
            </div>
        </div>
    </section>
  )
}

export default WorkExperience