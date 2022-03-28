import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github Issues</title>
        <link rel="icon" type="image/svg+xml" href="data:image/x-icon;" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Github Issues" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
