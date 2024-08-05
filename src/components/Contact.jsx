/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { linkedin } from '../assets';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import IsMobile from '../utils/isMobile';

const Contact = () => {
  const isMobile = IsMobile();

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={ styles.sectionSubText }>Fale comigo</p>
        <h3 className={ styles.sectionHeadText }>Contato</h3>

        <div className="absolute inset-0 flex justify-end m-12 card-img_hover">
          <div 
              onClick={() => window.open('https://www.linkedin.com/in/philipe-da-motta-mello', '_blank')}
              className="white-gradient-1 w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer">
                <img src={ linkedin } alt="play" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>

      </motion.div>
        
      { !isMobile && 
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      }
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');