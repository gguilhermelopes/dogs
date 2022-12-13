import React from "react";
import Feed from "../Components/Feed/Feed";
import Head from "./Interface Elements/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site Dogs" />
      <Feed />
    </section>
  );
};

export default Home;
