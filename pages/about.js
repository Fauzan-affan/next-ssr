import fetch from "isomorphic-fetch"

import styles from '../styles/Home.module.css'

import Nav from "../components/Nav.js"

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Page</h1>
      <Nav />
    </div>
  )
}

export default About