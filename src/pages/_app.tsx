import { makeServer } from '../services/mirage';
import { AppProps } from 'next/app';

import '../styles/globals.scss';
import { ActivityProvider } from '../context/ActivitiesContext';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActivityProvider >
      <Component {...pageProps} />
    </ActivityProvider>
  )
}

export default MyApp
