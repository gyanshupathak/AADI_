import { motion } from 'framer-motion';
import { socials } from '../constants/index';
import { footerVariants } from '../utils/motion';
import arrow from '../assets/Arrow.svg';
import logo from '../assets/svg/logo.svg';
import token from '../assets/svg/token4.svg';
import { ScrollParallax } from "react-just-parallax";



const Footer = () => (
  <div className='pt-[12rem] -mt-[2.75rem] text-white font-sans bg-n-8'>
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`sm:p-16 xs:p-8 px-6 py-12 relative`}
  >
    <div className="footer-gradient" />
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="font-extrabold md:text-[64px] text-[44px] text-white z-10">
            OKAY <span className='text-purple-500'>GAMER! </span> LET'S PLAY
        </h1>
        <ScrollParallax isAbsolutelyPositioned> 
        <div className="">
          <img src={token} alt="token" className="w-[10rem] h-[10rem] object-contain absolute top-0 left-[55rem] z-0" />
        </div>
        </ScrollParallax>
        <button type="button" className="flex items-center h-fit py-4 px-6   bg-purple-500 transition-all duration-500 
          ease-in-out transform hover:scale-105 hover:bg-purple-800  rounded-[32px] gap-[12px]">
          <span className="font-bold text-[16px] text-white">
            Enter AADI 
          </span>
          <img
            src={arrow}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <img src={logo} className="w-[15%] text-[24px] text-white">
            
          </img>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 AADI. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </motion.footer>
  </div>
  
);

export default Footer;