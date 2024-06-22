import Section from "./Section";
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import {StartSteps}  from './Steps';
import { TypingText, TitleText } from './Texts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import joystick from '../assets/joystick.png';
import map from '../assets/map.png';
import people1 from '../assets/people1.svg';
import people2 from '../assets/people2.svg';
import people3 from '../assets/people3.svg';
import leaderboard from '../assets/svg/leaderboard.svg';

const Contests = () => {
  return (
    <div className="pt-[6rem] mt-[14.75rem]  bg-n-8">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
    >
        <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="relative  flex w-full  "
        >
        <div className="relative z-1 animate-fadeInUp  mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1  font-sans font-bold text-8xl  ">
            PARTICIPATE AND <span className='text-purple-500'>WIN</span>! 
          </h1> 
          <p className="body-1 font-sans max-w-[62rem] mx-auto mt-8 text-n-2 text-4xl font-normal ">
          Participate in daily, weekly & monthly contests across many games!
          </p>
        </div>
        </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-12 mb-12 flex w-full h-[550px] "
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[150px] h-[150px] p-[6px] rounded-full ">
          <img src={people1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-40 right-60 w-[700px] h-[700px] p-[6px] rounded-full ">
          <img src={leaderboard} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[150px] h-[150px] p-[6px] rounded-full ">
          <img src={people2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[150px] h-[150px] p-[6px] rounded-full ">
          <img src={people3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
      
        <div className="relative z-1  mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mt-[6.25rem]">
        <p className="body-1 font-sans max-w-[62rem] mx-auto  text-n-2 text-6xl font-normal ">
        Win handsome <span className='text-purple-500'>rewards</span> for ranking in the leaderboard 
          </p>          
        </div>
       
    </motion.div>
    </div>
  );
};

export default Contests;

