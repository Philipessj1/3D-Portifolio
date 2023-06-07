import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [revealForm, setRevealForm] = useState(true);
  const [loading, setLoading] = useState(false);

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

        {/* <button onClick={() => setRevealForm(!revealForm)}>Change</button> */}

        { revealForm && 
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
        }
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');