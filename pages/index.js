import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/NavBar'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <Link href="/ninjas">
        See Ninja Listing
      </Link>

      <Footer />
   </div>
  )
}
