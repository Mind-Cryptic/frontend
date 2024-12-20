




export default function ResetPassword(){
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="p-8 shadow shadow-slate-400 rounded-2xl">
                    <h1 className="text-3xl font-extrabold text-center">Forgot Password</h1>
                    <p>Enter your email address and we will send you a link to reset your password</p>
                    <form className="flex gap-3 flex-col items-center justify-center mt-5">
                        <input className="border-2 border-black rounded-md p-2" placeholder="Email"/>
                        <input type="submit" className="p-2 bg-[#FC5D5D] cursor-pointer rounded-md bg-black text-white" value="Send Reset Link"/>
                    </form>
                </div>
            </div>        
        </>
    )
}