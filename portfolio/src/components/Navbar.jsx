import React from 'react'

function Navbar() {
  return (
    <nav class="bg-slate-600 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Jean Claude NSHIMIYIMANA</h1>
      <ul class="flex space-x-6">
        <li><a href="#about" class="hover:underline">About</a></li>
        <li><a href="#skills" class="hover:underline">Skills</a></li>
        <li><a href="#projects" class="hover:underline">Projects</a></li>
        <li><a href="#contact" class="hover:underline">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar