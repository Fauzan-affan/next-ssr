import styles from '../styles/Home.module.css'

import Nav from "../components/Nav.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Nav />
    </div>
  )
}
