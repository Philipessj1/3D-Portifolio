import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TechCard from "./cards/TechCard";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, i) => (
        <TechCard key={ technology.title } index={ i } { ...technology } />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tecnologias");