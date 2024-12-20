import { z } from "zod";





const baseSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),

    password: z.string()
    .min(6, { message: "Password must be at least 6 characters long" }),
})

const extendedSchema = baseSchema.extend({
    fullName: z.string()
    .min(3, { message: "Full Name must be at least 3 characters long" })
    .max(50, { message: "Full Name must be at most 50 characters long" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Full Name must only contain letters and spaces" }),

    checkBox: z.boolean().refine((value)=> value===true, {message:"You must accept the terms and conditions"}),

    confirmPassword: z.string()
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
    }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
})

export const getAuthSchema = (type: "sign-up" | "sign-in") => {
    if (type === "sign-up") {
        return extendedSchema;
    }
    return baseSchema;
}

