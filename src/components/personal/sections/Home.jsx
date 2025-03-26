import React from 'react'
import RevealOnScroll from '../../RevealOnScroll'

const Home = () => {
  return (
    
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 
        to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I'm Nirmal Kumar</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
         like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-center space-x-4">
            <a href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >View Projects</a>
            <a href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
            transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] 
            hover:bg-blue-500/10"
            >Contact Me</a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home
