import "tailwindcss/tailwind.css";
import "../styles/main.css";

import Head from "next/head";

/* Import components */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* Import types */
import type { AppProps } from "next/app";

function MarmarisPalace({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grand Yazıcı Club Marmaris Palace</title>
      </Head>

      <Navbar />

      <div className="container pb-10 mx-auto space-y-28">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MarmarisPalace;
