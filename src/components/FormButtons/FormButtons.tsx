import { FC } from 'react'
import { FormButtonsType } from '../../types/FormTypes'

const FormButtons: FC<FormButtonsType> = ({ currentStep, handlePrevStep, handleNextStep }) => {
  return (
    <div className='felx gap-2 mt-10 relative min-h-[50px] self-end text-sm md:text-base'>
      {currentStep > 1 && currentStep < 5 && (
        <button
          className='absolute left-0 py-2 md:py-3 hover:text-slate-300'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
      )}
      {currentStep < 4 && (
        <button
          className='absolute right-0 bg-indigo-500 hover:bg-indigo-400 rounded-md py-2 md:py-3 md:px-7'
          onClick={handleNextStep}
        >
          Next Step
        </button>
      )}
      {currentStep === 4 && (
        <button
          className='absolute right-0 bg-indigo-500 hover:bg-indigo-400 rounded-md py-2 md:py-3 md:px-7'
          type='submit'
        >
          Confirm
        </button>
      )}
    </div>
  )
}

export default FormButtons