import "@/styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blogs by Siddharth</title>
      </Head>
      <Layout>
        {/* <InjectDriftScript /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
