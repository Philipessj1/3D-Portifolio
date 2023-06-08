import { experiences } from '../../constants';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = () => {
  return ( 
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
   );
}
 
export default ExperienceCard;