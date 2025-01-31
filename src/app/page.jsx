"use client"

import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Loader from "../components/Loader" 
import { useEffect,useState } from "react"
import PatternDivider from "../components/PatternDivider"
const Page = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main>
    <Header />
    <Hero />
    <About />
    <WorkExperience />
    <Project />
    <Contact />
    </main>
    )
}

export default Page