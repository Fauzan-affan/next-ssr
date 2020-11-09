import fetch from "isomorphic-fetch"
import Nav from "../../components/Nav.js";
import Styles from "../../styles/Home.module.css"

const Show = ({ show }) => {
  return (
    <>
      <div className={Styles.container}>
        <Nav />
        <h1>{show.name}</h1>
        <p>{show.summary}</p>
        <img src={show.image.medium ? show.image.medium : (<h1 style={{color: "red"}}>Image not found :(</h1>)} alt="" />
      </div>
    </>
  );
};

Show.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};

export default Show;
