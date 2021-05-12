import { AppProps } from 'next/app';
import React from 'react';
import '../styles/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
