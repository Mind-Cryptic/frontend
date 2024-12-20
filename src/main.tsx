import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css'
import './styles/Font.css';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Suspense fallback={'main fragment Loding ......'}>
        <HelmetProvider>
          <App/>
        </HelmetProvider>
      </Suspense>
  </StrictMode>
)
