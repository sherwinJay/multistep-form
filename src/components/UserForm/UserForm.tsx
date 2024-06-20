import { FC } from 'react'
import { DefaultFormType } from '../../types/FormTypes'
import FormWrapper from '../FormWrapper/FormWrapper'



const UserForm: FC<DefaultFormType> = ({ register, errors, stepCounter }) => {

  // * start of styles
  const errorStyle = 'text-[#F9818E] text-[11px] leading-[20px] col-start-2 justify-self-end'
  const inputStyle = 'focus:border-indigo-300 outline-none border-[1px] border-gray-500 rounded-md w-full col-start-1 col-end-3 py-[0.7rem] px-4 mt-2 text-[14px] md:text-base'
  const labelStyle = 'col-span-1 text-[12px] md:text-sm'
  const wrapperStyle = 'grid grid-customRows2 grid-cols-2'
  // * end of styles

  return (
    <FormWrapper
      title='Personal Info'
      description='Please provide your name, email address, and phone number.'
      stepCounter={stepCounter}
    >
      <div className='grid gap-6'>
        <div className={wrapperStyle}>
          <label className={labelStyle}>
            Name
          </label>
          {errors!.name?.message && <span className={errorStyle}>{errors!.name?.message}</span>}
          <input
            className={`${inputStyle} ${errors!.name ? 'border-[#F9818E]' : ''}`}
            type='text'
            {...register('name')}
            autoFocus
          />
        </div>
        <div className={wrapperStyle}>
          <label className={labelStyle}>
            Email Address
          </label>
          {errors!.email?.message && <span className={errorStyle}>{errors?.email?.message}</span>}
          <input
            className={`${inputStyle} ${errors?.email ? 'border-[#F9818E]' : ''}`}
            type='text'
            {...register('email')}
          />
        </div>
        <div className={wrapperStyle}>
          <label className={labelStyle}>
            Phone
          </label>
          {errors!.phone?.message && <span className={errorStyle}>{errors!.phone?.message}</span>}
          <input
            className={`${inputStyle} ${errors!.phone ? 'border-[#F9818E]' : ''}`}
            type='number'
            {...register('phone')}
          />
        </div>
      </div>
    </FormWrapper>
  )
}

export default UserForm