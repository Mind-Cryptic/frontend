import { Controller, useController, UseControllerProps, useForm } from "react-hook-form";
import { getAuthSchema } from "../libs/utils"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";



interface AuthFormProps { 
    type: "sign-up" | "sign-in"
    onFormSubmit: (values:any) => void
};


export default function AuthForm({type, onFormSubmit}: AuthFormProps) {

    const schema = getAuthSchema(type);

    const {register, handleSubmit, control, formState: {errors}} = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password:"",
            ...(type==="sign-up" ? {fullName:"", confirmPassword:"", checkBox:false}: {})
        }
    })

    const onSubmit = async(values:z.infer<typeof schema>) => {
        schema.parse(values);
        onFormSubmit(values)
    }


    return(
        <>
        <div className="h-screen w-full flex justify-center items-center">
            <div className="p-8 shadow shadow-slate-400 rounded-2xl">
                <h1 className="text-3xl font-extrabold text-center">{type === "sign-in" ? "Sign In" : "Sign Up"}</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 flex-col items-center justify-center mt-5">
                    {type === "sign-up" && (
                        <>
                            <input {...register("fullName")} placeholder="Full Name" className="border-2 border-black rounded-md p-2"/>
                            {errors && "fullName" in errors && <span className="text-red-500">{errors.fullName?.message}</span>}

                        </>
                    )}

                    <input {...register("email")} className="border-2 border-black rounded-md p-2" placeholder="Email"/>
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input {...register("password")} type="password" placeholder="Password" className="border-2 border-black rounded-md p-2"/>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    {type === "sign-up" && (
                        <>
                            <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="border-2 border-black rounded-md p-2"/>
                            {errors && "confirmPassword" in errors && (<span className="text-red-500">{errors.confirmPassword?.message}</span>)}

                            <Controller
                            name="checkBox"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" onChange={(e) => field.onChange(e.target.checked)} className="w-4 h-4"/>
                                    I accept the terms and conditions
                                </label>
                                )}
                            />
                            {errors && "checkBox" in errors && (<span className="text-red-500">{errors.checkBox?.message}</span>)}
                        </>
                    )}




                    {type === "sign-up" && <Link to="/reset-password">Forgot Password?</Link>}

                    {type === "sign-in" && <Link to="/reset-password">Forgot Password?</Link>}

                    <input
                        type="submit"
                        className="p-2 bg-[#FC5D5D] cursor-pointer rounded-md bg-black text-white"
                        value={type === "sign-in" ? "Sign In" : "Sign Up"}
                    />

                </form>


                
                <h1 className="text-lg p-2 cursor-pointer bg-[#FC5D5D] text-white text-center m-2">
                    {type === "sign-in" ? "Sign in with Google" : "Sign up with Google"}
                </h1>
                

                <p>
                {type === "sign-in" ? (
                    <>
                    Don't have an account? <Link to="/sign-up" className="text-[#FC5D5D]">Sign Up</Link>
                    </>
                ) : (
                    <>
                    Already have an account? <Link to="/sign-in" className="text-[#FC5D5D]">Sign In</Link>
                    </>
                )}
                </p>
            </div>
        </div>
        </>
    )
}