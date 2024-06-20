import { z } from "zod"
import { multiformSchema } from "../schema/multiformSchema"

export type FormFieldType = z.infer<typeof multiformSchema>
// export type PlanSelectType = z.infer<typeof planSchema>
