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

import { Slideshow, ContactForm } from '../components'

const Index = () => {
  return (
    <div>
      <Head>
        <title>PhoeniX - For the trader, by the trader</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Phoenix is India's first Cryptocurrency Derivatives Exchange" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://phoenix4traders.vercel.app/"} />
        <meta property="og:title" content="PhoeniX - For the trader, by the trader" />
        <meta property="og:description" content="Phoenix is India's first Cryptocurrency Derivatives Exchange" />
        <meta property="og:image" content="https://phoenix4traders.vercel.app/meta.jpg"/>
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://phoenix4traders.vercel.app/"}/>
        <meta property="twitter:image" content="https://phoenix4traders.vercel.app/meta.jpg" />

        <meta property="twitter:domain" content="phoenix4traders.vercel.app" />
        <meta property="twitter:title" content="PhoeniX - For the trader, by the trader" />
        <meta property="twitter:description" content="Phoenix is India's first Cryptocurrency Derivatives Exchange" />
        
        <link rel="icon" href="/favicon.ico" />
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
            <div className="mt-6">
              <a
                class="rounded-lg border-2 border-transparent bg-blue-500 px-6 py-2.5 text-center text-sm text-xl font-medium capitalize leading-5 text-white transition-all duration-300 hover:border-blue-500 hover:bg-transparent hover:text-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
                href="#Contact"
              >
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
            <div class="flex flex-col items-start gap-5 lg:flex-row">
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
                <p className="text-justify font-dmsans text-xl text-gray-700 lg:pr-16">
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
              <SiBitcoin /> <SiEthereum /> <SiDogecoin /> <SiLitecoin />{" "}
              <SiMonero /> <SiRipple /> <SiZcash />
            </div>
          </div>

          <hr class=" border-gray-200" />
          <section className="container mx-auto  pt-20">
            <div className="my-3 flex flex-col items-center">
              <h1 class="font-dmsans text-4xl font-bold capitalize text-gray-800 lg:text-5xl ">
                <span className="font-dmsans font-extrabold text-red-400">
                  phoeniX{" "}
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
            <Slideshow />
          </section>
        </section>
        <hr class=" border-gray-200" />

        <div class="mx-auto pt-20" id="Contact">
          <div className="my-3 flex flex-col items-center">
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
          <ContactForm/>
        </div>
      </main>
    </div>
  );
};

export default Index;
