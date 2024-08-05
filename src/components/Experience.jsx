/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import ExperienceCard from "./cards/ExperienceCard";

import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          O que eu fiz até agora!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiência
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");