import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './cards/ProjectCard';

const Works = () => {
  return (
    <>
    <motion.div variants={ textVariant() }>
    <p className={ styles.sectionSubText }>
          Meu trabalho
        </p>
        <h2 className={ styles.sectionHeadText }>
          Projetos
        </h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Os projetos a seguir demonstram minhas habilidades e experiência por meio de exemplos reais do meu trabalho. Cada projeto é brevemente descrito com links para repositórios de código. Isso reflete minha capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias e gerenciar projetos de forma eficaz.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard 
          key={`project-${index}`}
          index={ index }
          {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, 'work');