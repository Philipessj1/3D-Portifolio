/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './cards/ServiceCard';

const About = () => {
  return (
    <>
      <motion.div variants={ textVariant() }>
        <p className={ styles.sectionSubText }>
          Introdução
        </p>
        <h2 className={ styles.sectionHeadText }>
          Visão Geral
        </h2>
      </motion.div>

      <motion.p variants={ fadeIn('', '', 0.1, 1) }
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou um desenvolvedor de software habilidoso com experiência em TypeScript e JavaScript, e expertise em frameworks como React, Node.js, Three.js e Angular.
        Meu objetivo é não apenas atender, mas superar suas expectativas, entregando resultados de alta qualidade de maneira rápida e profissional. Vamos trabalhar juntos para transformar ideias em realidade.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        { services.map((service, i) => (
          <ServiceCard key={ service.title } index={ i } { ...service }/>
        )) }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')