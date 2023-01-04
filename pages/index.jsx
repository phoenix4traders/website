import React from "react";
import Head from "next/head";
import { RiBarChart2Fill, RiNewspaperFill } from "react-icons/ri";
import { GiServerRack } from 'react-icons/gi'

const Index = () => {
  return (
    <div>
      <Head>
        <title>PhoeniX - For the trader, by the trader</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div class="container mx-auto px-6 text-center">
          <div class="mx-auto max-w-3xl py-20">
            <h1 class="font-sans text-4xl font-extrabold text-gray-800 lg:text-5xl">
              For&nbsp;the&nbsp;Trader, By&nbsp;the&nbsp;Trader
            </h1>
            <p class="mt-6 text-lg text-gray-500 ">
              phoeniX is India's first Derivatives cryptocurrency exchange
            </p>
            <button class="mt-6 rounded-lg border-2 border-transparent bg-blue-500 px-6 py-2.5 text-center text-sm text-xl font-medium capitalize leading-5 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
              Contact Us
            </button>
          </div>

          <div class="mt-10 flex justify-center">
            <img
              class="h-full w-full object-cover lg:w-3/5"
              alt="banner image"
              src="/banner-img.png"
            />
          </div>
        </div>
        <div className="relative left-0 w-full bg-red-400 py-10">
          <div class="container mx-auto px-6 py-5">
            <h1 class="font-sans pb-10 text-4xl font-extrabold text-white lg:text-5xl">
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
        </div>
      </main>
    </div>
  );
};

export default Index;
