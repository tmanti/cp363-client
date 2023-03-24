import { useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Test: NextPage = () => {

    const [loading, setLoading] = useState(false);

    const createDatabase = api.database.create.useMutation({
        onSuccess:()=>{
            console.log("yep")
        }
    })

    const populateDatabase = api.database.populate.useMutation({
        onSuccess:()=>{
            console.log("yepopulated")
        }
    })

    const dropDatabas = api.database.dropAll.useMutation({
        onSuccess:()=>{
            console.log("yedropped")
        }
    })

    const submit_createdb = async () =>{
        setLoading(true);
        try{
            createDatabase.mutate()
        } catch (e){
            console.log(e);
        }
        setLoading(false);
    }

    return(
        <>
            <Head>
                <title>Database Control Page</title>
                <meta name="description" content="Database control page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="items-center">
                <button
                    type="button"
                    onClick={()=>{submit_createdb()}}
                    disabled={loading}
                    className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                    Create Database
                </button>
            </main>
        </>
    )

};

export default Test;