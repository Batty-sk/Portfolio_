"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROGRAMMING_SKILLS, SOCIAL_LINKS } from '../constants';
import { me, bottom_design } from '../assests';
import ThreeBalls from './ThreeBalls';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to('#me', {
      borderRadius: '30%',
      duration: 1,
      ease: 'circ',
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      '.social',
      {
        x: -50,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        delay: 3,
        ease: 'circ',
        scrollTrigger: {
          trigger: '#about',
        },
      }
    );

    gsap.fromTo(
      '.programming-skill',
      {
        y: -50,
      },
      {
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'bounce',
        scrollTrigger: {
          trigger: '#about',
        },
      }
    );

    gsap.fromTo(
      '.about-title',
      {
        y: 100,
        ease: 'back',
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'back',
        scrollTrigger: {
          trigger: '#about', // trigger the animation when about container is visible.
        },
      }
    );
  }, []);

  return (
    <section
      className="md:h-screen h-fit p-1 w-full text-black flex flex-col justify-center items-center rounded-bl-3xl rounded-br-3xl border-b-4 bg-[#fffad7] overflow-hidden"
      id="about"
    >
      <div className="about-title p-5 opacity-0">
        <h1 className="text-amber-700 font-bold font-mono md:text-5xl text-3xl">About</h1>
      </div>

      <div className="content-container flex md:flex-row flex-col justify-center items-center gap-5 ">
        <div className="about-photo flex flex-col w-80 " >
          <div className="w-full relative z-10 h-full flex justify-center rounded-full " style={{
                background: 'repeating-radial-gradient(#fffad7, #477cd1ed 50px)'
          }}>
            <Image src={me} width={'400px'} height={'500px'} className="w-64 md:w-[500px]" alt="" id="me" />
          </div>
        </div>

        <div className="about-skills h-full flex justify-center items-center">
          <ul className="flex md:flex-col gap-1 flex-wrap max-h-80 justify-center items-center ">
            {PROGRAMMING_SKILLS.map((x, i) => (
              <li key={i} className="programming-skill p-1 bg-zinc-50 border shadow-md rounded-full">
                <Image src={x} height={40} width={40} alt="skill" />
              </li>
            ))}
          </ul>
        </div>
        <div className="about-details font-mono md:max-w-[50%] max-w-[95%] flex flex-col justify-center">
          <p className="md:text-start text-center leading-relaxed">
            I&apos;m a <span className="font-bold md:text-3xl text-2xl text-blue-900">Creative Developer</span> with a deep understanding of data structures, algorithms, system design, and full-stack technologies. I love bringing imaginative projects to life, blending technical expertise with innovative thinking. Whether it&apos;s building complex systems or crafting seamless user experiences, I&apos;m passionate about creating solutions that are both functional and inspiring.
          </p>

          <div className="flex justify-center">
              {SOCIAL_LINKS.map((x, i) => (
                  <a href={x.link} target="_blank" className='block h-24 w-20' key={i} >
                    {' '}
                    <ThreeBalls texture_name={x.texture_name} dIntensity={4.3} />
                    </a>
              ))}
          </div>
          <div className="flex justify-center">
            <Image src={bottom_design} alt="" height={''} width={55} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
