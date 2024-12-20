import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { createBrowserRouter, Navigate, Outlet, redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/verify-email';
import useAuthStore from './store/authStore';
import ChallengeHub from './pages/challengeHub/ChallengeHub';

import { axiosApi } from './hooks/useAxiosSecure';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));





// ----------Private route-----------------

function PrivateRoutes({option}:{option:boolean}){

  const user = useAuthStore((state)=> state.accessToken);

  if(option && !user){
    return <Navigate to="/sign-in" />;
  }

  if(!option && user){
    return <Navigate to="/challenge-hub" />;
  }

  return <Outlet/>
}
// ----------------------------------------




 export  const routes = createBrowserRouter([

  {
    path: '/',
    hydrateFallbackElement: <div>Loading...</div>,
    loader: async() => {
      console.log("routes.tsx")
      const response = await axiosApi.post("/auth/api/token/refresh/");
      if(response.data.error === "token is missing"){
        return null;
      }
      if(response.status === 200){
        useAuthStore.getState().setAccessToken(response.data.accessToken)
        return null;
      }
    },

    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/challenge-hub',
        element:<PrivateRoutes option={true}/>,
        children:[{
          path:'/challenge-hub',
          element:<ChallengeHub/>
        }]
      },
      {
        path: '/about',
        element: (
          <>
            <Helmet>
              <title>About</title>
            </Helmet>
            <About/>
          </>
        )
      },
      {
        path:'/blog',
        element: <h1 className='text-center text-4xl'>Blog</h1>
      },
      {
        path:'/sign-up',
        element: <PrivateRoutes option={false}/>,
        hydrateFallbackElement: <div>Loading...</div>,
        children:[
          {
            path:'/sign-up',
            element: <SignUp/>
          },
          {
            path:'/sign-up/verify-email',
            loader: async() => {
              try {
                const response = await axiosApi.get('/auth/validate-token/')
                return response.status === 200 ? null : redirect("/sign-up")
              } catch {
                return redirect("/sign-up")
              }
            },
            element: <VerifyEmail/>
          }
        ]
      },
      {
        path:'/sign-in',
        element: <PrivateRoutes option={false}/>,
        children:[{
          path:'/sign-in',
          element: <SignIn/>
        }]
      }, 
      {
        path:'/reset-password',
        element:<PrivateRoutes option={false}/>,
        children:[{
          path:'/reset-password',
          element: <ResetPassword/>
        }]
      },
      {
        path:'*',
        element: <div className='h-screen max-w-full grid items-center'><h1 className='mx-auto font-extrabold text-red-600 text-9xl'>404</h1></div>
      }
    ]
  }
])




