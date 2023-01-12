import React from "react";
import Head from "next/head";
import { RiBarChart2Fill, RiNewspaperFill } from "react-icons/ri";
import { GiServerRack } from 'react-icons/gi'

import {
  SiBitcoin,
  SiEthereum,
  SiDogecoin,
  SiLitecoin,
  SiMonero,
  SiRipple,
  SiZcash,
} from "react-icons/si";

import { Slideshow } from '../components'

const Index = () => {
  return (
    <div >
      <Head>
        <title>PhoeniX - For the trader, by the trader</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="py-10">
        <div class="container mx-auto px-6 text-center" id="Home">
          <div class="mx-auto max-w-5xl py-20">
            <h1 class="font-sans text-3xl font-extrabold text-gray-800 lg:text-5xl">
              Phoenix is India's first Cryptocurrency Derivatives Exchange
            </h1>
            <p class="mt-6 text-xl text-gray-700 ">
              For&nbsp;the&nbsp;Trader, By&nbsp;the&nbsp;Trader
            </p>
            <div className='mt-6'>
            <a class="rounded-lg border-2 border-transparent bg-blue-500 px-6 py-2.5 text-center text-sm text-xl font-medium capitalize leading-5 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 focus:outline-none lg:mx-0 lg:w-auto transition-all duration-300" href="#Contact">
              Contact Us
            </a>
            </div>
          </div>

          <div class="mt-10 flex justify-center">
            <img
              class="h-full w-full object-cover lg:w-3/5"
              alt="banner image"
              src="/banner-img.png"
            />
          </div>
        </div>

        <section className="relative left-0 w-full bg-red-400 py-10">
          <div class="container mx-auto px-6 py-5">
            <h1 class="font-sans pb-10 text-4xl font-bold text-white lg:text-5xl">
              Features of Our App
            </h1>
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-white p-3 text-red-400 shadow-sm">
                  <RiBarChart2Fill className="h-10 w-10 text-2xl" />
                </div>
                <h1 class="mt-4 text-2xl font-bold text-white ">
                  Introductions of Futures and Options
                </h1>

                <p class="mt-2 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>

              <div>
                <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-white p-3 text-red-400 shadow-sm">
                  <GiServerRack className="h-10 w-10 text-2xl" />
                </div>
                <h1 class="mt-4 text-2xl font-bold text-white ">
                  Decentralized Web 3.0 Wallet
                </h1>

                <p class="mt-2 text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>

              <div>
                <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-white p-3 text-red-400 shadow-sm">
                  <RiNewspaperFill className="h-10 w-10 text-2xl" />
                </div>
                <h1 class="mt-4 text-2xl font-bold text-white  ">
                  News and Articles
                </h1>

                <p class="mt-2 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white py-20" id="About">
          <div class="container mx-auto px-6 py-10">
            <div class="flex flex-col items-start lg:flex-row gap-5">
              <div class="flex h-full w-full flex-col justify-start gap-5 lg:w-1/2">
                <div class="">
                  <h1 class="font-dmsans text-4xl font-bold capitalize text-gray-800 lg:text-5xl ">
                    About the Company
                  </h1>

                  <div class="mt-2">
                    <span class="inline-block h-1 w-40 rounded-full bg-red-400"></span>
                    <span class="ml-1 inline-block h-1 w-3 rounded-full bg-red-400"></span>
                    <span class="ml-1 inline-block h-1 w-1 rounded-full bg-red-400"></span>
                  </div>
                </div>
                <p className="lg:pr-16 text-justify font-dmsans text-xl text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate expedita ipsa dolor quo! Non facilis, dolorum, sit
                  aperiam officia dicta eius similique libero iure nulla
                  voluptas! Atque suscipit commodi inventore mollitia possimus.
                  Quos fugiat dicta ea corporis iste ad accusamus laudantium
                  iusto, pariatur, voluptatum maxime, enim libero dolores beatae
                  et.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate expedita ipsa dolor quo! Non facilis, dolorum, sit
                  aperiam officia dicta eius similique libero iure nulla
                  voluptas! Atque suscipit commodi inventore mollitia possimus.
                  Quos fugiat dicta ea corporis iste ad accusamus laudantium
                  iusto, pariatur, voluptatum maxime, enim libero dolores beatae
                  et.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate expedita ipsa dolor quo! Non facilis, dolorum, sit
                  aperiam officia dicta eius similique libero iure nulla
                  voluptas!
                </p>
              </div>

              <div class="flex items-center justify-center lg:w-1/2">
                <img
                  class="h-auto w-full rounded-lg object-cover shadow-lg lg:h-[34rem] lg:w-[45rem]"
                  src="/image-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr class=" border-gray-200" />
          <div class="container mx-auto px-6 py-10">
            <div className="flex flex-row items-center justify-evenly text-6xl text-gray-300">
              <SiBitcoin/> <SiEthereum/> <SiDogecoin/> <SiLitecoin/> <SiMonero/> <SiRipple/> <SiZcash/>
            </div>
          </div>

          <hr class=" border-gray-200" />
          <section className="container mx-auto  pt-20">
            <div className='flex flex-col items-center my-3'>
              <h1 class="font-dmsans text-4xl font-bold capitalize text-gray-800 lg:text-5xl ">
                <span className="font-extrabold text-red-400 font-dmsans">
                   phoeniX{' '}
                </span>
                App Preview
              </h1>

              <div class="my-2">
                <span class="mr-1 inline-block h-1 w-1 rounded-full bg-red-400"></span>
                <span class="mr-1 inline-block h-1 w-3 rounded-full bg-red-400"></span>
                <span class="inline-block h-1 w-40 rounded-full bg-red-400"></span>
                <span class="ml-1 inline-block h-1 w-3 rounded-full bg-red-400"></span>
                <span class="ml-1 inline-block h-1 w-1 rounded-full bg-red-400"></span>
              </div>
              
            </div>
            <Slideshow/>
          </section>
        </section>
        <hr class=" border-gray-200" />

        <div class="mx-auto pt-20" id="Contact">
          <div className='flex flex-col items-center my-3'>
              <h1 class="font-dmsans text-4xl font-bold capitalize text-gray-800 lg:text-5xl ">
                Contact Us
              </h1>

              <div class="my-2">
                <span class="mr-1 inline-block h-1 w-1 rounded-full bg-red-400"></span>
                <span class="mr-1 inline-block h-1 w-3 rounded-full bg-red-400"></span>
                <span class="inline-block h-1 w-40 rounded-full bg-red-400"></span>
                <span class="ml-1 inline-block h-1 w-3 rounded-full bg-red-400"></span>
                <span class="ml-1 inline-block h-1 w-1 rounded-full bg-red-400"></span>
              </div>
              
            </div>
            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-xl shadow-gray-300/50  ">

                <form class="mt-6">
                    <div class="flex-1">
                        <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                        <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="flex-1 mt-6">
                        <label class="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-6">
                        <label class="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md hover:bg-white hover:border-red-400 hover:text-red-400 hover:border-red-400 border-2 border-transparent focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
            </div>
        </div>

      </main>
    </div>
  );
};

export default Index;
