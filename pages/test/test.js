import styles from "../../styles/test.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}

const Test = ({ users }) => {
  return (
    <div>
      <h1>Test</h1>
      {users.map((user) => (
        <Link href={"/test/" + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Test
