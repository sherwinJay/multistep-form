import { FC } from 'react'
import iconChecked from '../../assets/images/icon-thank-you.svg'

const DoneForm: FC = ({ }) => {

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <section
      className='py-20 px-[1rem] mt-[-90px] mx-3 rounded-xl md:px-[4rem] md:w-[580px] md:h-[570px] grid place-content-center bg-gray-700 md:rounded-none md:mt-0 md:mx-0 overflow-hidden'
    >
      <div className='grid gap-4'>
        <img
          src={iconChecked}
          alt='checkmark'
          className='justify-self-center'
        />
        <h2 className='font-bold text-[26px] md:text-[32px] text-center'>
          Thank You!
        </h2>
        <p className='text-center text-gray-300 text-sm md:text-[15px] leading-6'>
          Thanks for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at &nbsp;
          <a href="#" className='underline text-indigo-300'>support@loremgaming.com</a>.
        </p>
        <button
          onClick={handleRefresh}
          className='bg-indigo-500 hover:bg-indigo-400 rounded-md py-3 px-3 md:w-[200px] justify-self-center mt-5 text-sm md:text-base'
        >
          Go back to homepage
        </button>
      </div>
    </section>
  )
}

export default DoneForm