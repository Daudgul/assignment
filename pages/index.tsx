import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Fotter from "../components/Fotter";
import MainBox from "../components/MainBox";
import SideNav from "../components/SideNav";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex">
        <Head>
          <title>Assignment</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNav />
        <MainBox />
      </div>
      <Fotter />
    </>
  );
};

export default Home;
