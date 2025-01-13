import React from 'react'

function Project() {
  return (
    <section id="projects" class="py-20 bg-white text-center">
    <div class="container mx-auto px-6">
      <h3 class="text-3xl font-bold mb-6">Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">Project 1: Portfolio Website</h4>
          <p class="text-gray-700">A responsive portfolio website showcasing my web development skills and projects. Built with HTML, CSS, JavaScript, and TailwindCSS.</p>
          <a href="https://github.com/yourusername/portfolio" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">Project 2: E-Commerce Site</h4>
          <p class="text-gray-700">An e-commerce platform with a product catalog, shopping cart, and checkout system. Built with ReactJS, state management, and a mock API.</p>
          <a href="https://github.com/yourusername/e-commerce" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">Project 3: Task Manager</h4>
          <p class="text-gray-700">A task manager application that allows users to add, update, and delete tasks. Built using HTML,CSS and JavaScript.</p>
          <a href="https://github.com/Nshimiyimana10/TO-DO-LIST-APP.git" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>

        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">Project 4:JS Form validation </h4>
          <p class="text-gray-700">A form that facilitate the users to register with their adress.Built using HTML, CSS & JavaScript  </p>
          <a href="https://github.com/Nshimiyimana10/Advanced-JS-Form.git" class="text-blue-600 hover:underline">View on GitHub</a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Project