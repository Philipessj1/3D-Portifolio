import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { linkedin } from '../assets';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import IsMobile from './IsMobile';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const isMobile = IsMobile();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name] : [value] })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_oiwxsnn',
      'template_4ltvnhz',
      {
        from_name: form.name,
        to_name: 'Philipe',
        from_email: form.email,
        to_email: 'philipessj1@gmail.com',
        message: form.message
      },
      'PZ12eRLRrReH0FPUh'
    ).then(() => {
      setLoading(false);
      alert('Obrigado. Entrarei em contato o mais breve possível.');
      setForm({
        name: '',
        email: '', 
        message: ''
      })
    }, error => {
      setLoading(false);
      console.log(error);
      alert('Algo deu errado.')
    })
  }

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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/*  Nome  */}
         <label className='flex flex-col'>
          <span className="text-white font-medium mb-4">Nome :</span>
          <input 
            type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Qual é o seu nome?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
         </label>
          {/* Email */}
         <label className='flex flex-col'>
          <span className="text-white font-medium mb-4">Email :</span>
          <input 
            type="text"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Qual é o seu email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
         </label>
          {/* Mensagem */}
         <label className='flex flex-col'>
          <span className="text-white font-medium mb-4">Mensagem :</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Qual é a sua mensagem?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
         </label>

         <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
          { loading ? 'Enviando...': 'Enviar' }
         </button>
        </form>

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