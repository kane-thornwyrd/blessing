import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="tbd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blessing
        </h1>

        <input multiple type="file" />
      </main>

      <footer className={styles.footer}>
        <p>---</p>
      </footer>
    </div>
  )
}
