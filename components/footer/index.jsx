import React from 'react'
import {RiLinkedinFill} from 'react-icons/ri';

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
                Phoenix is India's first Derivatives cryptocurrency exchange
              </p>

              <div class="-mx-2 mt-6 flex">
                
                <a
                  href="#"
                  class="mx-2 text-gray-600 transition-colors text-xl duration-300 hover:text-blue-500 "
                  aria-label="Linked In"
                >
                  <RiLinkedinFill/>
                </a>

              </div>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 class="font-bold uppercase text-gray-700">About</h3>
                <a
                  href="#"
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
                <a
                  href="#"
                  class="mt-2 block text-sm text-gray-600 hover:underline"
                >
                  Careers/Jobs
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
                  Desktop App
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
                <span class="mt-2 block text-sm text-gray-600 hover:underline">
                  +91 99999 99999
                </span>
                <span class="mt-2 block text-sm text-gray-600 hover:underline">
                  example@email.com
                </span>
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