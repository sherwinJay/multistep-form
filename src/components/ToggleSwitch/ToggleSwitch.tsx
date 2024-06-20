import { FC } from 'react'
import { ToggleSwitchType } from '../../types/FormTypes'
import clsx from 'clsx'



const ToggleSwitch: FC<ToggleSwitchType> = ({ isMonthly, setIsMonthly, resetField, setIsActive }) => {

  const handleCheckboxChange = () => {
    setIsMonthly(prev => !prev)
    resetField('planOptions')
    setIsActive(null)
  }

  return (
    <div className='grid place-content-center py-2 mt-10 bg-gray-600 rounded-lg'>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isMonthly}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className={clsx('label flex items-center text-sm text-gray-300 font-semibold',
          isMonthly && 'text-indigo-300'
        )}>
          Monthly
        </span>
        <span className='slider mx-4 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 bg-[#212b36]'>
          <span
            className={clsx('dot h-[18px] w-[18px] rounded-full bg-white duration-200',
              !isMonthly && 'translate-x-6'
            )} />
        </span>
        <span className={clsx('label flex items-center text-sm text-gray-300 font-semibold',
          !isMonthly && 'text-indigo-300'
        )}>
          Yearly
        </span>
      </label>
    </div>
  )
}

export default ToggleSwitch