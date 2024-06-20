import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
} from "react-hook-form"
import { FormFieldType } from "./SchemaType"
import { ReactNode } from "react"

export type FieldName = keyof FormFieldType

export type PlanSelectType = {
  id: string
  name: string
  amountMonthly: number
  amountYearly: number
}

export type MultiStepFormType = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}
export type DefaultFormType = {
  register: UseFormRegister<FormFieldType>
  errors?: FieldErrors<FormFieldType>
  stepCounter: number
}

export type FormWrapperType = {
  title: string
  description: string
  children: ReactNode
  stepCounter: number
}

export type PlanFormType = {
  stepCounter: number
  // register: UseFormRegister<FormFieldType>
  watchAllFields: FormFieldType
  control: Control<FormFieldType, any>
  errors: FieldErrors<FormFieldType>
  resetField: UseFormResetField<FormFieldType>
  isMonthly: boolean
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>
}

export type PlanOption = {
  name: string
  id: string
  isMonthly?: boolean
  planPrice: number
}

export type PlanSelectProps = {
  options: PlanSelectType[]
  handleClick: (value: PlanOption) => void
  isMonthly: boolean
  isActive: string | null
  setIsActive: React.Dispatch<React.SetStateAction<string | null>>
  // selected: any
}

export type ToggleSwitchType = {
  isMonthly: boolean
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>
  resetField: UseFormResetField<FormFieldType>
  setIsActive: React.Dispatch<React.SetStateAction<string | null>>
}

export type AddOnsFormType = DefaultFormType & {
  isMonthly: boolean
}

export type SummaryFormType = DefaultFormType & {
  isMonthly: boolean
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  watchAllFields: FormFieldType
  setValue: UseFormSetValue<FormFieldType>
}

export type FormButtonsType = {
  currentStep: number
  handlePrevStep: () => void
  handleNextStep: () => Promise<void>
}

export type ProgressbarType = {
  currentStep: number
}
