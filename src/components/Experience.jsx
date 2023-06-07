/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date='Em Breve'
    iconStyle={{ background: experiences[2].iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
         src={ experiences[0].icon }
         alt='em-construção'
         className="w-[80%] h-[80%] object-contain"
         />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        Area em construção
      </h3>
      <p className="text-secondary text-[16px] font-semi-bold">
        { experiences.company_name }
        </p>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={ textVariant() }>
      <p className={ styles.sectionSubText }>
            O que fiz até agora
          </p>
          <h2 className={ styles.sectionHeadText }>
            Experiência
          </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          <ExperienceCard />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, '');