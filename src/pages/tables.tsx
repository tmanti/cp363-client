import { useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";

import { api } from "~/utils/api";

type query_result = {
    rows:any,
    fields:any
}

const Tables: NextPage = () => {
    const router = useRouter();

    const [queryResult, setQueryResults] = useState<query_result>();

    const getTableContents = api.table.select_all.useMutation({
        onSettled(data, error, variables, context) {
            if(data){
                setQueryResults(data);
            }
        },
    })

    const query_db = (table:string)=>{
        getTableContents.mutate({table_name:table});
    }

    return (
        <>
            <Head>
                <title>Database Control Page</title>
                <meta name="description" content="Database control page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="text-lg">Database Table Control Page</h1>
                <button
                    className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={()=>{router.push("/manage");}}
                >
                    Database Control Page
                </button>
                <div className="py-2">
                <hr></hr>
                </div>
                <div>  
                    <button
                        type="button"
                        onClick={()=>{query_db("Address")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Address Table
                    </button>

                </div>
                <div className="py-2">
                <hr></hr>
                </div>
                <div>
                    {queryResult?JSON.stringify(queryResult.rows):""}
                </div>
            </main>
        </>
    )
}

export default Tables;