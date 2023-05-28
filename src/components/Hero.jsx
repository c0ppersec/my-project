import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#E4212A]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText}sm:flex text-white 100 md:max-lg:flex`}>
            We're<span className='text-[#FFFFFF]'> Walk Art Creative!</span>
          </h1>
          <p className={`${styles.heroSubText} ml-1 text-transparent text-1xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 animate-pulse`}>
           We bring your imagination to life <br className='sm:block hidden' />
          </p>
          {/* <p className='sm:flex flex-row mt-32 md:max-lg md:mt-32 md:ml-72 md:pl-96 font-normal text-transparent text-1xl bg-clip-text bg-gradient-to-r from-lime-50 to-pink-700 text-[17.5px] max-1xl leading-[19px]'></p> */}
          <p className='sm:flex flex-row mt-28 md:max-lg md:mt-40 md:ml-72 md:pl-96 text-transparent text-1xl bg-clip-text bg-gradient-to-r from-lime-50 to-pink-700'>
          With experience in various industries, we provide creative digital solutions to <br />
          help you achieve your goals.

          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <p className="xs:flex-auto mt-10 sm:flex sm:mb-3 md:mb-10 font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Get to know more &nbsp; 
        </p>
        <a href='#about'>
          <div className='xs:flex-auto mt-10 sm:flex sm:mb-3 md:mb-10 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
          <div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");
