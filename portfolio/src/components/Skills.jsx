import React from 'react'

function Skills() {
  return (
    <section id="skills" class="py-20 bg-gray-100 text-center">
    <div class="container mx-auto px-6">
      <h3 class="text-3xl font-bold mb-6">Skills</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">HTML</h4>
          <p class="text-gray-700">I use HTML for structuring my web applications, including texts, buttons, images, forms, tables, and semantic elements.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">CSS</h4>
          <p class="text-gray-700">I style applications using CSS, including layout techniques such as Flexbox, Grid, animations, transitions, and responsiveness.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">JavaScript</h4>
          <p class="text-gray-700">I use JavaScript to make applications interactive, including DOM manipulation, event handling, loops, form validation, and asynchronous programming.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">ReactJS</h4>
          <p class="text-gray-700">I leverage ReactJS to build dynamic and scalable web applications using hooks, props, state management, and functional components.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="text-xl font-semibold">TailwindCSS</h4>
          <p class="text-gray-700">I use TailwindCSS for fast and responsive styling using utility-first classes to create aesthetically pleasing and modern interfaces.</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Skills