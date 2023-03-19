import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>DevX</title>
        <meta name="description" content="NextGen DevX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
            <h1>
              Next generation developer experience with GPT powered <a href="https://github.com/features/copilot">GitHub Copilot</a>
            </h1>
        </div>

      </main>
    </>
  )
}
