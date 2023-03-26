import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CP363: Database Client</title>
        <meta name="description" content="CP363: Database Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            CP363 <span className="text-[hsl(280,100%,70%)]">Database</span> Client
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h3 className="text-lg font-bold text-gray-400 sm:text-[2rem]">
            An interactive webpage to create, populate, and test the database system for our CP363 project.
          </h3>
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            onClick={()=>{router.push("/manage");}}
          >
            Manage Database
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
