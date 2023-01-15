import React from 'react'
import { RiLinkedinFill, RiPhoneFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer class="bg-white ">
      <div class="container mx-auto p-6">
        <div class="lg:flex">
          <div class="-mx-6 w-full lg:w-2/5">
            <div class="px-6">
              <div>
                <a
                  href="#"
                  class="font-dmsans text-2xl font-bold text-gray-800  hover:text-gray-700 "
                >
                  phoeniX
                </a>
              </div>

              <p class="mt-2 max-w-sm text-gray-500 dark:text-gray-400">
                Phoenix is India's first Cryptocurrency Derivatives Exchange
              </p>

              <div class="-mx-2 mt-6 flex">
                <a
                  href="https://www.linkedin.com/company/phoenixch/"
                  class="mx-2 text-xl text-gray-600 transition-colors duration-300 hover:text-blue-500 "
                  aria-label="Linked In"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-2 gap-6  lg:grid-cols-4">
              <div>
                <h3 class="font-bold uppercase text-gray-700">About</h3>
                <a
                  href="#About"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Community
                </a>
              </div>

              <div>
                <h3 class="font-bold uppercase text-gray-700">Blog</h3>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Articles
                </a>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  News
                </a>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Blogs
                </a>
              </div>

              <div>
                <h3 class="font-bold uppercase text-gray-700">Products</h3>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Mobile App
                </a>
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Web App
                </a>
              </div>

              <div>
                <h3 class="font-bold uppercase text-gray-700">Contact</h3>
                <a
                  href="tel:+919521421553"
                  class="mt-2 flex flex-row gap-2 items-center text-sm text-gray-600 hover:underline"
                >
                  <RiPhoneFill />
                  +91 95214 21553
                </a>
                <a
                  href="mailto:iamraviutsav@gmail.com"
                  class="mt-2 flex flex-row gap-2 items-center text-sm text-gray-600 hover:underline"
                >
                  <RiMailFill />
                  iamraviutsav@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-6 h-px border-none bg-gray-200 dark:bg-gray-700" />

        <div>
          <p class="text-center text-gray-500">
            © phoeniX {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer