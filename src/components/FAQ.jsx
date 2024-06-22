import Section from "./Section";
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import  {StartSteps} from './Steps';
import { TypingText, TitleText } from './Texts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import joystick from '../assets/joystick.png';
import React, { useState } from "react";
import { questions } from "../constants/index";
import SingleQuestion from "./design/SingleQuestion";

const FAQ = () => {

  const [cards] = useState(questions);

  return (
    <div className="w-full font-sans pt-[12rem] -mt-[2.75rem]  bg-n-8">
      <div className=" lg:max-w-4xl mx-auto py-20 px-4">
        <TypingText title="| FREQUENTLY ASKED QUESTIONS" />
        <TitleText title={<>QUESTIONS ? </>} />
        <TitleText title={<>WE'VE GOT ANSWERS </>} />


        <section className="mt-12 grid grid-cols-1 gap-2 ">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default FAQ;

