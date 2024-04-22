import '@aws-amplify/ui-react/styles.css';
import "../styles/globals.css";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}