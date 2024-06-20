import { FC } from 'react'
import { ProgressbarType } from '../../types/FormTypes'
import { stepsData } from '../../data/data'
import clsx from 'clsx'

const Progressbar: FC<ProgressbarType> = ({ currentStep }) => {
  return (
    <div className='bg-center bg-progressbarBgMobile bg-no-repeat bg-cover md:bg-progressbarBg md:rounded-lg'>
      <div
        className='relative w-[280px] mx-auto md:mx-0 grid grid-cols-5 gap-4  p-6 items-start min-h-[180px] md:gap-5 md:grid-cols-1 md:grid-rows-customRows4'
      >
        {stepsData.map((item, index) => (
          <div
            key={item.id}
            className='grid gap-3 items-center md:grid-cols-customGridCol2 relative z-30'
          >
            <aside className={clsx(
              'w-[35px] h-[35px] grid place-content-center rounded-full border-[1px] border-gray-200  bg-[#483EFF]',
              currentStep === (index + 1) && '!bg-indigo-300 text-black'
            )}>
              {(index + 1)}
            </aside>
            <div className='hidden md:grid'>
              <span className='uppercase text-xs text-gray-300'>
                {item.title}
              </span>
              <p className='uppercase font-bold text-sm'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div className='hidden md:block h-[270px] border-l-[1px] border-white absolute top-[40px] left-[42px]' />
        <div className='block md:hidden h-[1px] absolute bg-white top-[40px] left-[30px] w-[200px]' />
      </div>
    </div>
  )
}

export default Progressbar