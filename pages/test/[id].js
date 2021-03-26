export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const data = await res.json()

  return {
    props: { user: data },
  }
}

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.website}</h3>
      <h3>{user.address.city}</h3>
      <h3>{user.address.street}</h3>
    </div>
  )
}

export default Details
