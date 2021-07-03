import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      class="z-50 fixed top-0 w-full text-yellow-700 bg-transparent border-b p-2 m-auto"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/21017.jpg')",
      }}
    >
      <div class="container flex flex-col flex-wrap items-center justify-center py-5 mx-auto md:flex-row max-w-7xl ">
        <div class="flex justify content-around relative flex flex-col md:flex-row ">
          <Link to="/">
            <a class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span class="flex justify-center mx-auto text-xl font-black leading-none text-yellow-400 select-none">
                Movie Simple App<span class="text-red-500">.</span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
