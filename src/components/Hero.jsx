import  curve from "../assets/hero/curve.png";
import  banner from "../assets/hero/banner.jpg";
import  heroBackground from "../assets/hero/hero-background.jpg";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import tokens from "../assets/svg/tokens.svg";
import ellipse from "../assets/svg/ellipse.svg";
import videoImage from "../assets/videoImage.png"
import playbutton from "../assets/Playbutton.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { useState, useEffect } from 'react';



function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}


const Hero = () => {
  const parallaxRef = useRef(null);
  const { width } = useWindowSize();

  return (
    <div
      className="pt-[12rem] -mt-[5.25rem]"
      
    >
      <div className="container relative text-center" ref={parallaxRef}>
        <div className="relative z-1 animate-fadeInUp max-w-[62rem] mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 font-sans font-bold text-6xl sm:text-xl md:text-6xl lg:text-8xl">
            PLAY TO EARN REAL <span className="text-purple-500">REWARDS! </span>
          </h1> 
          <p className="body-1 font-sans max-w-xl mx-auto mt-5 lg:mt-15 text-n-2 text-xl font-normal lg:mb-8 lg:text-4xl">
          Gaming Assets to Money in your Wallet  
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="">
                <ScrollParallax isAbsolutelyPositioned> 
                <div className="relative mt-[-8rem]  lg:-top-50 left-1/2 transform -translate-x-1/2 lg:w-[60%]">
                  <img src={tokens} alt="image" className=" ml-5 " />
                </div>
                </ScrollParallax>
              </div>
            </div>

          </div>
          <div className="relative right-[2.5rem] top-[-7rem] lg:bottom-80 lg:right-36 w-[120%]">
            <img src={ellipse} alt="ellipse" />
          </div>  
          {width >= 1024 && <BackgroundCircles />}                  
        </div>
        
        <div className="relative  font-sans w-fi z-1 text-center text-white mb-[3.875rem] md:mb-20 ">
          <motion.div
              variants={staggerContainer}             
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full  mx-auto flex lg:flex-row flex-col gap-8 `}
              >
              
              <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <img
                  src={videoImage}
                  alt="get-started"
                  className="relative top-[-7rem] w-[100%] h-[90%] object-contain "
                />
                <img
                  src={playbutton}
                  alt="get-started"
                  className="relative top-[-20.5rem] left-[11rem] lg:top-[-25rem] lg:left-[15rem] w-[20%] h-[20%] object-contain "
                />
              </motion.div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <div className="relative lg:text-left top-[-11.25rem] lg:left-[2rem]" >
                  <h1 className="h1 mb-6 font-sans text:4xl font-bold text-white lg:text-6xl ">
                    LEVELLING UP <span className="text-purple-500">GAMING!</span>
                  </h1> 
                  <p className="body-1 font-sans max-w-xl  mt-15 text-n-2 text-2xl lg:text-4xl font-normal lg:mb-8">
                    Welcome to AADI!  
                  </p>
                  <p className="body-1 font-sans max-w-xl  text-n-2 text-2xl lg:text-4xl font-normal lg:mb-8">
                    Get rewards for playing fun games!  
                  </p>
                  <Button className="font-sans mt-6  text-sm lg:inline-flex lg:mt-8" href="#login">
                    Join The Waitlist
                  </Button>
                
                  
                </div>
              </motion.div>
          </motion.div>
          

          
        </div>
      </div> 
        
    </div>
  );
};

export default Hero;



<div className="relative  font-sans    bg-gradient-to-r from-purple-500   w-fi z-1 text-center text-white mb-[3.875rem] md:mb-20 ">
          <motion.div
              variants={staggerContainer}             
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full  mx-auto flex lg:flex-row flex-col gap-8 `}
              >
              
              <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <img
                  src={videoImage}
                  alt="get-started"
                  className="w-[80%] h-[90%] object-contain "
                />
                <img
                  src={playbutton}
                  alt="get-started"
                  className="w-[80%] h-[90%] object-contain "
                />
              </motion.div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <div className="relative text-left top-[-11.25rem] left-[2rem]" >
                  <h1 className="h1 mb-6 font-sans font-bold text-white text-6xl ">
                    LEVELLING UP GAMING! 
                  </h1> 
                  <p className="body-1 font-sans max-w-xl  mt-15 text-n-2 text-4xl font-normal lg:mb-8">
                    Welcome to AADI!  
                  </p>
                  <p className="body-1 font-sans max-w-xl  text-n-2 text-4xl font-normal lg:mb-8">
                    Get rewards for playing fun games!  
                  </p>
                  <Button className="hidden font-sans text-sm lg:inline-flex mt-8" href="#login">
                    Join The Waitlist
                  </Button>
                
                  
                </div>
              </motion.div>
          </motion.div>
          

          
        </div>