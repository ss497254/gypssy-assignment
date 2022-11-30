import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Saurabh Singh | Gypssy</title>
                <link rel="icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
