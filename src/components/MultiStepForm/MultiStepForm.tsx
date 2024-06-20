import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormFieldType } from '../../types/SchemaType'
import { multiformSchema } from '../../schema/multiformSchema'
import { AddOnsForm, FormButtons, PlanForm, SummaryForm, UserForm } from '..'
import { FieldName, MultiStepFormType } from '../../types/FormTypes'
import { stepsData } from '../../data/data'

const MultiStepForm: FC<MultiStepFormType> = ({ currentStep, setCurrentStep }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    resetField,
    setValue,
    control,
    trigger,
  } = useForm<FormFieldType>({
    resolver: zodResolver(multiformSchema)
  })

  const watchAllFields = watch()
  const [isMonthly, setIsMonthly] = useState<boolean>(true) // check this one!! maybe it can improve it?
  const [previousStep, setPreviousStep] = useState(0)
  const stepCounter = currentStep - previousStep

  const handleNextStep = async () => {

    const fields = stepsData[(currentStep - 1)].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) {
      return // return null
    } else {
      try {
        if (currentStep <= 5) {
          setCurrentStep(prevStep => prevStep + 1)
          setPreviousStep(currentStep)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
      setPreviousStep(currentStep)
    }
  }
  // submit data
  const submitForm: SubmitHandler<FormFieldType> = (data) => {
    if (currentStep === 4) {
      console.log(data)
      handleNextStep()
      reset()
    }
  }

  return (
    <form
      className='grid grid-rows-customRows2b mt-[-90px] mx-3 px-[1rem] py-5 rounded-xl md:h-[570px] bg-gray-700 md:rounded-none md:px-[4rem] md:mt-0 md:mx-0 overflow-hidden'
      onSubmit={handleSubmit(submitForm)}
    >
      {currentStep === 1 && (
        <UserForm
          register={register}
          errors={errors}
          stepCounter={stepCounter}
        />
      )}
      {currentStep === 2 && (
        <PlanForm
          stepCounter={stepCounter}
          watchAllFields={watchAllFields}
          control={control}
          isMonthly={isMonthly}
          setIsMonthly={setIsMonthly}
          resetField={resetField}
          errors={errors}
        />
      )}
      {currentStep === 3 && (
        <AddOnsForm
          register={register}
          isMonthly={isMonthly}
          stepCounter={stepCounter}
        />
      )}
      {currentStep === 4 && (
        <SummaryForm
          watchAllFields={watchAllFields}
          register={register}
          isMonthly={isMonthly}
          setCurrentStep={setCurrentStep}
          stepCounter={stepCounter}
          setValue={setValue}
        // control={control}
        />
      )}
      <FormButtons
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </form>
  )
}

export default MultiStepForm