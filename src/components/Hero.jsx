import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
          <h1 className={`${styles.heroHeadText} mt-20 text-white 100 md:max-lg:flex`}>
            We're <span className='text-[#FFFFFF]'> Walk Art Creative</span>
          </h1>
          <p className={`${styles.heroSubText} ml-3 mt-2 text-transparent text-1xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 animate-pulse`}>
           We bring your imagine to life <br className='sm:block hidden' />
          </p>
          <p className='flex-auto mt-32 ml-96 pl-96 font-normal text-transparent text-1xl bg-clip-text bg-gradient-to-r from-lime-50 to-pink-700 text-[17.5px] max-1xl leading-[19px]'>
          With experience in various industries, we provide creative digital solutions to <br />
          help you achieve your goals.

          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <p className="font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Get to know more &nbsp; 
        </p>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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

export default Hero;
