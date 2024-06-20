import { FC } from 'react'
import { PlanOption, PlanSelectProps } from '../../types/FormTypes'
import clsx from 'clsx';
import { plansData } from '../../data/data';


const PlanSelect: FC<PlanSelectProps> = ({ options, handleClick, isMonthly, isActive, setIsActive, selected }) => {

  const handleSelect = (selectedOption: PlanOption) => {
    handleClick(selectedOption);
  };

  return (
    <div className='grid md:grid-cols-3 gap-5'>
      {options.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            handleSelect({ // * try to study this!
              id: item.id,
              name: item.name,
              planPrice: isMonthly ? item.amountMonthly : item.amountYearly,
              isMonthly: isMonthly
            })
            setIsActive(item.id)
          }}
          className={clsx(
            `px-4 py-5 border-[1px] items-center rounded-lg hover:border-indigo-400 cursor-pointer border-gray-500 grid grid-cols-customGridCol2 gap-3 md:grid-cols-1 md:gap-0`,
            isActive === item.id && '!border-indigo-400 bg-gray-600'
          )}
        >
          <img src={plansData[index].imgSrc} className='md:mb-10' /> {/* avoid passing img src to form data */}
          <div>
            <p className='font-semibold text-[14px] md:text-base'>
              {item.name}
            </p>
            <p className='text-gray-300 text-[11px] md:text-[14px]'>
              {isMonthly ? `$${item.amountMonthly}/mo` : `$${item.amountYearly}/yr`}
            </p>
            {!isMonthly && <p className='text-[11px] md:text-[14px] text-indigo-300'>2 months free</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlanSelect