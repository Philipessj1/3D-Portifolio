/* eslint-disable react/prop-types */
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import ExperienceCard from "./cards/ExperienceCard";

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