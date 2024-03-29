import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/NavBar'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {

 

  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name="keywords" content='ninjas' />
        <script  src="html2pdf.bundle.min.js"></script>
      </Head>

      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
        <p className={styles.text}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>

        <Link href="/ninjas">
          <button className={styles.btn}> Ninja Listing</button>
        </Link>
      </div>
    </>
  )
}
