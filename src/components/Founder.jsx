import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import founder from '../assets/founder.jpg';
import stamp from '../assets/svg/stamp.svg';

const Founder = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5]   bg-gradient-to-r from-purple-500  lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div />
        <div >
          <h4 className="font-bold font-sans sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Rashmi
          </h4>
          <p className="mt-[8px]  font-sans font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder AADI
          </p>
        </div>
        <p className="mt-[24px]  font-sans font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          AADI offers a comprehensive, engaging, and rewarding platform for gamers. It creates a robust marketplace and a unique ecosystem that appeals to both casual and dedicated gamers.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src={founder}
          alt="founder"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[22%] top-[2%]"
        >
          <img
            src={stamp}
            alt="stamp"
            className=" w-[350px] h-[350px] mr-4 "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Founder;