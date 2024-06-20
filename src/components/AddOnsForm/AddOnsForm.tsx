import { FC } from 'react'
import { AddOnsFormType } from '../../types/FormTypes'
import FormWrapper from '../FormWrapper/FormWrapper'
import { addOnsData } from '../../data/data'

const AddOnsForm: FC<AddOnsFormType> = ({ register, isMonthly, stepCounter }) => {
  return (
    <FormWrapper
      title='Pick add-ons'
      description='Add-ons help enhance your gaming experience.'
      stepCounter={stepCounter}
    >
      <div className='grid gap-4'>
        {addOnsData.map(item => (
          <label
            key={item.id}
            className='py-4 px-4 md:px-5 border-[1px] border-gray-500  rounded-lg hover:border-indigo-400'
          >
            <div className='grid grid-cols-customGridCol2 relative gap-4'>
              <input
                className='accent-indigo-400 checked:!border-indigo-400 checked:bg-gray-600'
                type='checkbox'
                {...register('addOnsOptionIds', { required: false })}
                value={item.id}
              />
              <div className='flex items-center justify-between gap-2'>
                <div>
                  <h4 className='font-semibold text-indigo-300 text-[14px] md:text-base'>
                    {item.name}
                  </h4>
                  <p className='text-gray-300 text-[12px] md:text-sm'>
                    {item.description}
                  </p>
                </div>
                <span className='text-indigo-300 text-[14px] md:text-base'>
                  {isMonthly ? `+$${item.amountMonthly}/mo` : `+$${item.amountYearly}/yr`}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </FormWrapper>
  )
}

export default AddOnsForm