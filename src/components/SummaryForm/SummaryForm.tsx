import { FC, useEffect } from 'react'
import { SummaryFormType } from '../../types/FormTypes'
import { addOnsData } from '../../data/data'
import FormWrapper from '../FormWrapper/FormWrapper'

const SummaryForm: FC<SummaryFormType> = ({ watchAllFields, register, isMonthly, setCurrentStep, stepCounter, setValue }) => {

  const getAddOnsSelected = addOnsData.filter(item => watchAllFields?.addOnsOptionIds?.includes(item.id))

  const totalPriceAddOns = getAddOnsSelected.reduce((acculmulator, item) => (
    acculmulator + (isMonthly ? item.amountMonthly : item.amountYearly)), 0
  )
  const planOptionPrice = watchAllFields.planOptions?.planPrice
  const totalPrice = totalPriceAddOns + planOptionPrice

  const billingType = watchAllFields.planOptions?.isMonthly ? 'monthly' : 'yearly'

  useEffect(() => {
    setValue('totalPrice', `$${totalPrice}`)
    setValue('billing', billingType)
  }, [setValue, totalPrice, billingType])

  return (
    <FormWrapper
      title='Finishing Up'
      description='Double-check everything looks OK before confirming.'
      stepCounter={stepCounter}
    >
      <div className='bg-[#2c3541] rounded-lg py-5 px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-semibold text-[14px] md:text-base'>
              {watchAllFields?.planOptions?.name} ({isMonthly ? 'Monthly' : 'Yearly'})
            </p>
            <button
              className='underline mt-2 text-gray-300 hover:text-indigo-400 text-xs md:text-sm'
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <span className='text-indigo-300 font-semibold text-base md:text-[18px]'>
            {isMonthly ? `$${planOptionPrice}/mo` : `$${planOptionPrice}/yr`}
          </span>
        </div>
        {getAddOnsSelected?.length ? <hr className='my-7 opacity-40' /> : ''}
        {/* add-ons */}
        <div>
          {getAddOnsSelected.map(item => (
            <div
              className='flex justify-between text-xs md:text-sm my-4'
              key={item.id}
            >
              <span className='text-gray-300'>
                {item.name}
              </span>
              <span>
                {isMonthly ? `+$${item.amountMonthly}/mo` : `+$${item.amountYearly}/yr`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='py-3 px-4 md:px-6 flex justify-between mt-2 items-center'>
        <p className='text-sm md:text-base text-gray-300'>
          {`Total (${isMonthly ? 'per month' : 'per year'})`}
        </p>
        <span className='font-bold text-lg md:text-xl text-indigo-300'>
          {/* total price here */}
          {isMonthly ? `+$${totalPrice}/mo` : `+$${totalPrice}/yr`}
          <input type="hidden" {...register('totalPrice')} />
          <input type="hidden" {...register('billing')} />
        </span>
      </div>
    </FormWrapper>
  )
}

export default SummaryForm