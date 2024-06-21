import { motion } from 'framer-motion';
import {  textVariant2 } from '../utils/motion';

export const TypingText = ({ title }) => (
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`  md:text-[16px] text-[32px] text-white `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
  >
    {title}
  </motion.h2>
);