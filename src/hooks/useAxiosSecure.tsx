import useAuthStore from "@/store/authStore";
import axios from "axios"



// ---------- Prevents redundant token refresh attems. ----------
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(token);
//   });
//   failedQueue = [];
// };



export const axiosApi = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})



const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})


axiosSecure.interceptors.request.use((config)=>{
    const token = useAuthStore.getState().accessToken;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
)


axiosSecure.interceptors.response.use((response)=> response,
    async(error) => {
        if(error.response.status===401){
            try {
                const refreshResponse = await axiosApi.post("/api/refresh-token/", { withCredentials: true });
                const accessToken = refreshResponse.data.accessToken;
                useAuthStore.getState().setAccessToken(accessToken)

                error.config.headers.Authorization = `Bearer ${accessToken}`;
                return axios(error.config);
            } catch (error:any) {
                console.error("Token refresh failed:", error.response.data.message);
                window.location.href = "/sign-in";
            }
        }
        return Promise.reject(error);
    }
)



export default axiosSecure;