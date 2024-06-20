import { FC } from 'react'
import { FormWrapperType } from '../../types/FormTypes'
import { motion } from "framer-motion"


const FormWrapper: FC<FormWrapperType> = ({ title, description, children, stepCounter }) => {
  return (
    <motion.div
      initial={{ x: stepCounter >= 1 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h1 className='font-semibold text-[1.5rem] md:text-[2rem] mb-1'>
        {title}
      </h1>
      <p className='text-gray-300 text-[14px] md:text-[16px]'>
        {description}
      </p>
      <section className='mt-10 md:w-[450px]'>
        {children}
      </section>
    </motion.div>
  )
}

export default FormWrapper