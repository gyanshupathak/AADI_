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

const GettingStarted = () => {
  return (
    <div className=" -mt-[6.75rem]  bg-n-8">
      
      <div className=" relative text-center bg-purple-500 font-sans ">
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col ml-16 pt-8 "
              >
                <TitleText title={<>LET'S START</>} />
                <TypingText title="|  AADI MEANS 'THE BEGINNING'" />
              </motion.div>  
        <div className="relative  font-sans bg-gradient-to-r from-purple-500  z-1 text-center text-white mb-[3.875rem] md:mb-20 ">
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
                  src={game}
                  alt="get-started"
                  className="w-[80%] h-[90%] object-contain "
                />
              </motion.div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <TypingText title="| Step 1" />
                <TitleText title={<>SignUp</>} />
                <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
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
        <div className="relative font-sans bg-purple-500 w-fi z-1 text-center text-white mb-[3.875rem] md:mb-20 ">

          <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
              >

              <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-end text-color-purple-500 flex-col"
              >
              <TypingText title="Step 2 |" />
              <TitleText title={<>Complete profile</>} />
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                {completeProfile.map((feature, index) => (
                  <ProfileSteps
                    key={feature}
                    number={`${index < 10 ? '0' : ''} ${index + 1}`}
                    text={feature}
                  />
                ))}
              </div>
              </motion.div>
              <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <img
                  src={king3}
                  alt="get-started"
                  className="w-[80%] h-[90%] object-contain "
                />
              </motion.div>
                
          </motion.div>
        </div>
        <div className="relative pb-4 font-sans bg-gradient-to-r from-purple-500 z-1  mx-auto text-center text-white mb-[3.875rem] md:mb-20 ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`2xl:max-w-[1280px] w-full mx-auto flex  lg:flex-row flex-col gap-8`}
          >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center items-start flex-col "
              >
                <img
                  src={king}
                  alt="get-started"
                  className="w-[80%] h-[90%] object-contain "
                />
              </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="flex-[0.95] flex  items-start  flex-col ml-5"
            >
            <TypingText title="| Step 3" />
            <TitleText title={<>Play Games </>} />
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

