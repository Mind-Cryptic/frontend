import { useEffect, useLayoutEffect, useState } from "react";
import useAuthStore from "./store/authStore";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import { routes } from "./AppRoutes";
import { axiosApi } from "./hooks/useAxiosSecure";
import Cookies from 'js-cookie';



export default function App() {

    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {

    //     const autoLogin = async () => {
    //         console.log("App.tsx")	

    //     try {
    //         const response = await axiosApi.post("/auth/api/token/refresh/");
    //                 console.log(response.data)
    //             // useAuthStore.getState().setAccessToken(response.data.accessToken)
    //     } catch (error) {
    //         console.error("Auto-login failed:", error);
    //     } finally {
    //         setIsLoading(false)
    //     }
    //     }

    //     autoLogin(); 
    // }, []);

    // useEffect(() => {
    //     const autoLogin = async () => {

    //         const token = Cookies.get('hello')

    //       console.log("App.tsx", token);
    
    //       try {
    //         const response = await axiosApi.post("/auth/api/token/refresh/");

    //         console.log(response.data);
    //         // useAuthStore.getState().setAccessToken(response.data.accessToken)
    //       } catch (error:any) {
    //         if (error.response && error.response.status === 400) {
    //           // Expected case: no refresh token or invalid token
    //           console.log("No valid refresh token. Skipping auto-login.");
    //         } else {
    //           // Handle unexpected errors (optional)
    //           console.error("Unexpected error:", error);
    //         }
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     };
    
    //     autoLogin();
    //   }, []);

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }


  return (<RouterProvider router={routes} />)
}