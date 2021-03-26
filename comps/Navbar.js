import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav>
      <h1>Users List</h1>
      <Image src="/v3.png" width={128} height={77} />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="test/test">
        <a>Users Listing</a>
      </Link>
    </nav>
  )
}

export default Navbar
