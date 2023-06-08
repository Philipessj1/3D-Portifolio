/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const TechCard = ({ name, index, icon }) => {
  return ( 
    <motion.div variants={ fadeIn('right', 'spring', 0.5 * index, 0.75) }>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 150,
      }}
      className='w-[100px] h-[100px] rounded-full bg-[#333333bb] p-4 ball_card'
      >
        <img src={icon} alt="tech Icons" title={name} className="w-full h-full object-cover"/>
      </Tilt>
    </motion.div> 
   );
}
 
export default TechCard;