import z from 'zod'
export const userSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9._-]+$/, 'Username can only contain a-z,A-Z,0-9,.,-,_'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must have at least 8 characters' })
})

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
})

export const signupSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, { message: 'Email is required' })
      .email({ message: 'Email is invalid' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, { message: 'Password is required' })
      .min(8, { message: 'Password must have at least 8 characters' }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })
