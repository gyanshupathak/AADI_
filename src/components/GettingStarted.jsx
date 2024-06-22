import { motion } from 'framer-motion';
import { startingFeatures , completeProfile } from '../constants';
import { StartSteps ,ProfileSteps } from '../components/Steps';
import { TypingText, TitleText } from '../components/Texts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import king from '../assets/svg/king.svg';
import { playGames } from '../constants';
import PlayGames from './PlayGames';
import king3 from '../assets/svg/king3.svg';
import game from '../assets/svg/game1.svg';
import token7 from '../assets/svg/token7.svg';
import tokenss from '../assets/svg/tokenss.svg';
import tokensGroup from '../assets/svg/tokenGroup.svg';
import tokens from '../assets/svg/tokens.svg';
import { ScrollParallax } from 'react-just-parallax';

const GettingStarted = () => {
  return (
    <div className=" -mt-[6.75rem]  bg-n-8">
      
      <div className=" relative text-center bg-n-8 font-sans ">
        <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col ml-16 pt-8 "
              >
                <TitleText title={<>LET'S <span className='text-purple-500'>START</span></>} />
                <TypingText title="|  AADI MEANS 'THE BEGINNING'" />
        </motion.div>  
        <div className="relative  font-sans bg-n-8   text-center text-white  md:mb-20 ">
          <motion.div
              variants={staggerContainer}             
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full  mx-auto flex lg:flex-row flex-col gap-16 `}
              >
              
              <div className="">
                <motion.div > 
                <img
                  src={tokensGroup}
                  alt="get-started"
                  className="absolute z-[30] left-[-22rem] top-[1rem] w-[100%] h-[120%] object-contain rotate-[40deg]"/>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className=" flex-[0.75] ml-[45rem] flex  justify-center items-start flex-col "
              >
                <TypingText title="| Step 1" />
                <TitleText title={<>Sign<span className='text-purple-500'>Up</span></>} />
                <div className="mt-[31px] flex flex-col max-w-[370px] gap-[12px] ">
                  {startingFeatures.map((feature, index) => (
                    <StartSteps
                      key={feature}
                      number={`${index < 10 ? '0' : ''} ${index + 1}`}
                      text={feature}
                    />
                  ))}
                </div>
              </motion.div>
          </motion.div>
          

          
        </div>
        <div className="relative  font-sans bg-n-8 w-fi  text-center text-white  md:mb-20 ">

          <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
              >

              <motion.div 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] mr-[28rem] flex justify-center items-end text-color-purple-500 flex-col"
              >
              <TypingText title="Step 2 |" />
              <TitleText title={<>Complete  <span className='text-purple-500'>Profile</span></>} />
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[12px]">
                {completeProfile.map((feature, index) => (
                  <ProfileSteps
                    key={feature}
                    number={`${index < 10 ? '0' : ''} ${index + 1}`}
                    text={feature}
                  />
                ))}
              </div>
              </motion.div>
              <div className="">
                <motion.div > 
                <img
                  src={tokens}
                  alt="get-started"
                  className="absolute z-[20] left-[32rem] top-[-10rem] w-[100%] h-[280%] object-contain rotate-[-40deg]"/>
                </motion.div>
              </div>
                
          </motion.div>
        </div>
        <div className="relative  font-sans bg-n-8   text-center text-white  md:mb-20 ">
          <motion.div
              variants={staggerContainer}             
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full  mx-auto flex lg:flex-row flex-col gap-16 `}
              >
              
              <div className="">
                <motion.div > 
                <img
                  src={token7}
                  alt="get-started"
                  className="absolute z-[30] left-[-32rem] top-[-5rem] w-[100%] h-[180%] object-contain rotate-[40deg]"/>
                </motion.div>
              </div>
              <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="relative top-[3rem] z-[40] flex-[0.75] ml-[35rem] flex  justify-center items-start flex-col "
            >
            <TypingText title="| Step 3" />
            <TitleText title={<><span className='text-purple-500'>Play</span> Games </>} />
            <TypingText title="(Limited Access)" />

            <div className="mt-[48px] flex flex-wrap justify-between ">
              {playGames.map((feature) => (
                <PlayGames key={feature.title} {...feature} />
              ))}
            </div>
            </motion.div>
          </motion.div>
          

          
        </div>
    </div>
    </div>
  );
};

export default GettingStarted;

