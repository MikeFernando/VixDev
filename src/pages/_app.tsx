import { makeServer } from '../services/mirage';
import { AppProps } from 'next/app';

import '../styles/globals.scss';
import { AuthProvider } from '../context/AuthContext';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider >
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
