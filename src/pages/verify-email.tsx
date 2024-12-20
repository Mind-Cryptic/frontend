import { axiosApi } from "@/hooks/useAxiosSecure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function VerifyEmail() {

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axiosApi.post("/auth/verify-email/", {code: e.target.code.value});
      if(response.status===200){
          // get the refresh-token and access-token and set it on the store. after setting them redirect to the challenge hub page.
          // navigate("/challenge-hub"); 
          console.log('getting from email verify page.')
      }
    } catch (err:any) {
      setError(err.response?.data?.message || "Verification failed. Try again.");
    }
  }
  

  return (
    <div className="max-w-[400px] m-auto mt-28 p-20">
      <h2 className="mb-2">Email Verification</h2>
      <form onSubmit={handleVerify}>
        <div>
          <input id="code"
            type="text"
            placeholder="Enter 6-digit code"
            maxLength={6}
            required
            className="w-[100%] p-[10px]"
          />
        </div>
        <button type="submit" className="bg-slate-300 p-2 rounded-md mt-3">
          Verify
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};