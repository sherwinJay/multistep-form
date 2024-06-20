import { FC, useState } from 'react'
import FormWrapper from '../FormWrapper/FormWrapper'
import { Controller } from 'react-hook-form'
import { PlanFormType, PlanOption } from '../../types/FormTypes'
import { plansData } from '../../data/data'
import PlanSelect from './PlanSelect'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

const PlanForm: FC<PlanFormType> = ({ errors, control, isMonthly, setIsMonthly, stepCounter, resetField, watchAllFields }) => {
  const getActiveId = watchAllFields?.planOptions?.id || null
  const [isActive, setIsActive] = useState<string | null>(getActiveId)

  return (
    <FormWrapper
      title="Select your plan"
      description='You have the option of monthly or yearly billing.'
      stepCounter={stepCounter}
    >
      <Controller
        name="planOptions"
        control={control}
        rules={{ required: true }}
        // defaultValue={{ id: '1b', name: 'Arcade', planPrice: 9, isMonthly: true }}
        render={({ field }) => (
          <PlanSelect
            options={plansData}
            isMonthly={isMonthly}
            handleClick={(value: PlanOption) => field.onChange(value)}
            isActive={isActive}
            setIsActive={setIsActive}
          // selected={field.value}
          />
        )}
      />
      {/* monthly / yearly button here */}
      <ToggleSwitch
        isMonthly={isMonthly}
        setIsMonthly={setIsMonthly}
        resetField={resetField}
        setIsActive={setIsActive}
      />
      {errors.planOptions?.message && <p className='text-[#F9818E] mt-2 text-sm'>{errors.planOptions.message}</p>}
    </FormWrapper>
  )
}

export default PlanForm