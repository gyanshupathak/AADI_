import Section from "./Section";
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import  {StartSteps} from './Steps';
import { TypingText, TitleText } from './Texts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import joystick from '../assets/joystick.png';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png'
import  { MarketPlaces , MarketPlacesIcons , Profiles} from '../constants/index';
import check from '../assets/check.svg';


const GettingStarted = () => {
  return (
    <div className="pt-[12rem] -mt-[2.75rem]  bg-n-8 font-sans">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
    >
        

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1  top-[10rem] lg:top-[-10rem] max-w-[20rem] lg:ml-auto lg:mr-36">
              <h4 className="h4 mb-4 text-white font-sans text-4xl lg:text-6xl font-bold ">Marketplaces</h4>
              <p className="body-2 mb-[3rem] text-white">
              Use Aadi tokens to buy :
              </p>
              <ul className="body-2 font-sans">
                {MarketPlaces.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-white font-sans">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-8 text-white font-sans text-6xl font-bold ">Enhance <span className='text-purple-500'>Profiles</span></h4>
                <ul className="body-2">
                {Profiles.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-white font-sans">{item}</p>
                  </li>
                ))}
              </ul>
              </div>

            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-8 text-white font-sans text-6xl font-bold">Redeeming <span className='text-purple-500'>Rewards</span></h4>
                <p className="body-2 mb-[2rem] text-n-2">
                  <span className="text-white font-bold">Cash Out : </span> You can convert Aadi tokens into real money. 
                  You can transfer these funds to your bank accounts, making your gaming efforts financially rewarding
                </p>

                <ul className="flex items-center justify-between">
                  {MarketPlacesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default GettingStarted;

