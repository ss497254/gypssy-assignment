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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
