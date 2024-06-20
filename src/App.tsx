import { useState } from 'react'
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import { DoneForm, Progressbar } from './components';

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1); // * default value is 1

  return (
    <div className='h-full min-h-screen grid place-content-center'>
      <div className='grid md:grid-cols-customGridCol2 md:bg-gray-700 md:p-3 rounded-lg'>
        <Progressbar currentStep={currentStep} />
        {currentStep < 5 && <MultiStepForm currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        {currentStep === 5 && <DoneForm />}
      </div>
    </div>
  )
}

export default App
