import { z } from "zod"

// export const planSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   amountMonthly: z.number(),
//   amountYearly: z.number(),
// })

export const planSchema = z.object({
  id: z.string(),
  name: z.string(),
  planPrice: z.number(),
  isMonthly: z.boolean(),
})

// export const planSchema2 = z.object({
//   id: z.string(),
//   name: z.string(),
//   planPrice: z.number(),
//   // isMonthly: z.boolean(),
//   billingType: z.string(),
// })

export const addOnsSchema = z.string().array().min(0)

export const multiformSchema = z.object({
  name: z
    .string()
    .min(3, "*Name is required")
    .refine((data) => data.trim() !== "", {
      message: "Name cannot be an empty string",
    }),
  email: z
    .string()
    .min(1, "*Email is required")
    .email("Invalid email address")
    .refine((data) => data.trim() !== "", {
      message: "Email cannot be an empty string",
    }),
  phone: z
    .string()
    .min(1, "*Phone is required")
    .refine((data) => data.trim() !== "", {
      message: "Phone cannot be an empty string",
    }),
  planOptions: planSchema,
  addOnsOptionIds: addOnsSchema,
  totalPrice: z.string().min(1),
  billing: z.string(),
})
