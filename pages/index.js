import fetch from "isomorphic-fetch"
import Link from "next/link"

import styles from '../styles/Home.module.css'

import Nav from "../components/Nav.js"

export default function Home({shows}) {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Nav />

      <ul>
        {
          shows.map(item => (
            <li key={item.id}>
              <Link href="/show/[id]" as={`/show/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=sherlock");
  const data = await res.json();
  // shows data from https://api.tvmaze.com/search/shows?q=sherlock
  const shows = {shows: data.map(item => item.show)}
  // console.log(shows)
  return shows
}