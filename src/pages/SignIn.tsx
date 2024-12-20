import { axiosApi } from "@/hooks/useAxiosSecure";
import AuthForm from "../components/AuthForm";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";


export default function SignIn() {

  const navigate = useNavigate()

  const handleSubmit = async (values: any) => {
    try {
      const response = await axiosApi.post('/auth/login/',{
        email: values.email,
        password: values.password
      })

      console.log(response.data.access_token)

      if(response.status===200){
        const accessToken = response.data.access_token;
        useAuthStore.getState().setAccessToken(accessToken)
        console.log("User logged in successfully!");
        navigate("/challenge-hub")
      }
    } catch (error:any) {
      console.log('🔴 Error signing up:',error?.response.data)
    }
  };

  return (
    <>
      <AuthForm type="sign-in" onFormSubmit={handleSubmit}/>
    </>
  )
}