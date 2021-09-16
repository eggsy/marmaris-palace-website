import "tailwindcss/tailwind.css";
import "../styles/main.css";

import Head from "next/head";

/* Import components */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* Import types */
import type { AppProps } from "next/app";

function MarmarisPalace({ Component, pageProps }: AppProps) {
  const meta = {
    title: "Marmaris Palace | Wake up to a Dream",
    description:
      "Best place to balance your mind and body, both feeling and looking good. It is our primary mission to make these happen. You will find yourself into the untouched nature, with amazing scent of pine trees of Marmaris.",
    image: "/meta-image.jpg",
  };

  return (
    <>
      <Head>
        <title>Grand Yazıcı Club Marmaris Palace</title>

        <meta
          name="description"
          property="description"
          content={meta.description}
        />

        {/* Open-graph */}
        <meta name="og:title" property="og:title" content={meta.title} />

        <meta
          name="og:description"
          property="og:description"
          content={meta.description}
        />

        <meta name="og:image" property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta
          name="twitter:title"
          property="twitter:title"
          content={meta.title}
        />

        <meta
          name="twitter:description"
          property="twitter:description"
          content={meta.description}
        />

        <meta
          name="twitter:image"
          property="twitter:image"
          content={meta.image}
        />
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
