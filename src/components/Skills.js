import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import htmlIcon from "../../public/images/profile/icons8-html-48.png";
import cssIcon from "../../public/images/profile/icons8-css-48.png";
import jsIcon from "../../public/images/profile/icons8-javascript-48(1).png";
import laravelIcon from "../../public/images/profile/icons8-laravel-48.png";
import mysqlIcon from "../../public/images/profile/icons8-mysql-48.png";
import phpIcon from "../../public/images/profile/icons8-php-40.png";
import reactNativeIcon from "../../public/images/profile/icons8-react-native-48.png";
import tailwindIcon from "../../public/images/profile/icons8-tailwindcss-48.png";
import wordpressIcon from "../../public/images/profile/icons8-wordpress-48.png";
import nextIcon from "../../public/images/profile/nextjswhite.png";
import webIcon from "../../public/images/profile/icons8-coding-48.png";

const Skill = ({ src, name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}>
      <Image src={src} alt={name} className="mr-3" />
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center">
        Habilitações
      </h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          <Image src={webIcon} alt="web development" className="mr-3" />
          Web
        </motion.div>
        <Skill name="HTML" src={htmlIcon} x="-25vw" y="2vw" />
        <Skill name="CSS" src={cssIcon} x="-5vw" y="-12vw" />
        <Skill name="Javascript" src={jsIcon} x="18vw" y="6vw" />
        <Skill name="ReactJS" src={reactNativeIcon} x="0vw" y="12vw" />
        <Skill name="Laravel" src={laravelIcon} x="-18vw" y="15vw" />
        <Skill name="PHP" src={phpIcon} x="15vw" y="-12vw" />
        <Skill name="MySQL" src={mysqlIcon} x="30vw" y="-5vw" />
        <Skill name="NextJS" src={nextIcon} x="0vw" y="-21vw" />
        <Skill name="Tailwind CSS" src={tailwindIcon} x="-25vw" y="-10vw" />
        <Skill name="WordPress" src={wordpressIcon} x="12vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
