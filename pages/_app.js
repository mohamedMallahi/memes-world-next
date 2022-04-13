import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meme World</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/litera/bootstrap.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
        <meta
          name="description"
          content="Here is a precise description of my awesome webpage."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main className="container py-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
