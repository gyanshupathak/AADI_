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
import { useEffect , useState } from 'react';


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


const GettingStarted = () => {
  const { width } = useWindowSize();

  return (
    <div className=" -mt-[6.75rem]  bg-n-8">
      
      <div className=" relative text-center bg-n-8 font-sans ">
        <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center lg:items-start flex-col lg:ml-16 pt-8 "
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
                  className="absolute z-[30] w-[40%] left-[9rem] top-[2rem] lg:left-[-22rem] lg:top-[1rem] lg:w-[100%] lg:h-[100%] object-contain rotate-[40deg]"/>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className=" flex-[0.75] mt-[15rem] lg:ml-[45rem] flex  lg:justify-center lg:items-start flex-col "
              >
                <TypingText title="| Step 1" />
                <TitleText title={<>Sign<span className='text-purple-500'>Up</span></>} />
                <div className=" lg:mt-[31px] flex flex-col lg:max-w-[370px] lg:gap-[12px] ">
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
        <div className="relative  mt-[4rem] lg:mt-[3rem] font-sans bg-n-8 w-fi  text-center text-white  md:mb-20 ">

          <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col lg:gap-8`}
              >

              <motion.div 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] lg:mr-[28rem] flex justify-center lg:items-end text-color-purple-500 flex-col"
              >
              <TypingText title="Step 2 |" />
              <TitleText title={<>Complete  <span className='text-purple-500'>Profile</span></>} />
              <div className="mt-[31px] flex flex-col ml-[2rem]  max-w-[370px] lg:gap-[12px]">
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
                  className="absolute top-[10rem] z-[20] lg:left-[32rem] lg:top-[-10rem] lg:w-[100%] lg:h-[250%] object-contain rotate-[-40deg]"/>
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
              
              {width >= 1024 && <div className="">
                <motion.div > 
                <img
                  src={token7}
                  alt="get-started"
                  className="absolute top-[50rem] z-[30] lg:left-[-32rem] lg:top-[-5rem] lg:w-[100%] lg:h-[180%] object-contain rotate-[40deg]"/>
                </motion.div>
              </div>}
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="relative top-[30rem] lg:top-[3rem] z-[40] flex-[0.75] lg:ml-[35rem] flex  justify-center lg:items-start flex-col "
            >
            <TypingText title="| Step 3" />
            <TitleText title={<><span className='text-purple-500'>Play</span> Games </>} />
            <TypingText title="(Limited Access)" />

            <div className="mt-[48px] flex flex-wrap lg:justify-between ">
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

