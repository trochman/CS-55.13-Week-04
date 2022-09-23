import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Tony Rochmans Basic Next.js App</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}