import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

type PropsType = {
  children: React.ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS RTK, TS Boilerplate</title>
        <meta name="description" content="Next.js typescript Redux Toolkit boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Layout;
