import Head from "next/head"
import Link from "next/link"
import Footer from "../comps/Footer"
import Navbar from "../comps/Navbar"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title> UsersList | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <h1>Homepage</h1>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <Link href="/test/test">
        <a>See users Lising</a>
      </Link>
    </>
  )
}
