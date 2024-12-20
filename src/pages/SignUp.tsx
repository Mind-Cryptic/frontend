import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "@/hooks/useAxiosSecure";



export default function SignUp(){

  const navigate = useNavigate()

  const handleSubmit = async (values: any) => {
    try {
      const response = await axiosApi.post('/auth/register/' , {
        full_name: values.fullName,
        email: values.email,
        password: values.password
      })

      if(response.status === 201){
        navigate('/sign-up/verify-email')
      }
    } catch (error:any) {
      console.log('🔴 Error signing up:',error?.response.data)
    }
  };

  return (
    <>
      <AuthForm type="sign-up" onFormSubmit={handleSubmit}/>
    </>
  )
}