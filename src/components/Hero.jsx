import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import IsMobile from '../utils/isMobile';

const Hero = () => {

  const isMobile = IsMobile();

  return (
    <section className={`relative w-full mx-auto ${!isMobile ? 'h-screen' : 'h-[500px]'}`}>
      <div className={`${ styles.paddingX } absolute inset-0 
      sm:top-[80px] top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou <span className='text-[#915eff]'>Philipe</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Desenvolvedor Web com <span className='blue-text-gradient'>MERN</span> Stack.
          </p>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

      <div className='absolute bottom-14 w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-[32px] h-[56px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero