import React from 'react';
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import {StartSteps } from './Steps';
import { TypingText, TitleText } from './Texts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import joystick from '../assets/joystick.png';
import { InfiniteMovingCards } from "./design/InfiniteCards";
import { games } from "../constants/index";


const GettingStarted = () => {
  return (
    <div className="font-sans pt-[12rem] -mt-[2.75rem]  bg-n-8">
      <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className=" lg:ml-16 flex-[0.95] flex justify-center  flex-col"
            >
            <div className="relative z-1  max-w-[24rem] lg:max-w-[62rem] mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
              <h1 className="h1 mb-6 font-sans font-bold  lg:text-8xl  ">
                GET LOST IN THESE<span className='text-purple-500'> WORLDS</span> TO GET YOUR <span className='text-purple-500'>AADI</span>! 
              </h1> 
              <p className="body-1 font-sans max-w-xl mx-auto mt-15 text-n-2 text-2xl lg:text-4xl font-normal lg:mb-8">
              Aadi is in <span className='text-purple-500'>beta</span>. It is live on 10+ games, with more games being added frequently 
              </p>
            </div>
            
            </motion.div>
            </motion.div>
      

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={games}
            direction="right"
            speed="slow"
          />
        </div>

        
      </div>
    </div>
  );
};

export default GettingStarted;

