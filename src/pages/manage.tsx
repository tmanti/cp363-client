import { useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Manage: NextPage = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const createTables = api.database.createTables.useMutation();
    const populateDatabase = api.database.populate.useMutation();
    const dropDatabase = api.database.dropAll.useMutation();
    const submitSql = api.database.execSqlFile.useMutation();

    const sqlfiles = api.database.getSqlFiles.useQuery();

    const submit_createTables = () =>{
        setLoading(true);
        try{
            createTables.mutate();
            setResult("Database Tables Created");
            setError("");
        } catch (e){
            console.log(e);

            setResult("");
            setError("Something Went Wrong (have the tables already been created?)");
        }
        setLoading(false);
    }

    const submit_dropTables = ()=>{
        setLoading(true);
        try{
            dropDatabase.mutate();

            setResult("Database Tables Dropped");
            setError("");
        } catch(e){
            console.log(e)

            setResult("");
            setError("Something Went Wrong (did you have tables created already?)");
        }
        setLoading(false);
    }

    const submit_populateTables = ()=>{
        setLoading(true);
        try{
            populateDatabase.mutate();

            setResult("Database Populated");
            setError("");
        } catch(e){
            console.log(e)

            setError("Something went wrong (have you created the tables yet?)")
            setResult("")
        }
        setLoading(false);
    }

    const submit_sql = (sql_file:string)=>{
        setLoading(true);
        try{
            if(sqlfiles.data && sqlfiles.data.includes(sql_file)){
                submitSql.mutate({
                    sql_file:sql_file
                })

                setFile("");

                setResult("executed " + sql_file);
                setError("");
            } else {
                setError("invalid file name")
                setResult("")
            }
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
            <main>
                <h1 className="text-lg">Database Control Page</h1>
                <button
                    className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={()=>{void router.push("/tables");}}
                >
                    View Tables Webpage
                </button>
                <div className="py-2">
                <hr></hr>
                </div>
                <div>
                    <div className="flex">
                        <div className="pr-3">
                            <button
                                type="button"
                                onClick={()=>{submit_createTables()}}
                                disabled={loading}
                                className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                                Create Tables
                            </button>
                            <br />
                            <br />
                            <button
                                type="button"
                                onClick={()=>{submit_dropTables()}}
                                disabled={loading}
                                className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                                Drop Tables
                            </button>
                            <br />
                            <br />
                            <button
                                type="button"
                                onClick={()=>{submit_populateTables()}}
                                disabled={loading}
                                className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                                Populate Tables
                            </button>
                        </div>
                        <div className="flex">
                            
                        </div>
                    </div>
                    <div className="py-2">
                    <hr></hr>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="px-2">
                                <input
                                    type="text"
                                    value={file}
                                    onChange={(e)=>setFile(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={()=>{submit_sql(file)}}
                                disabled={loading}
                                className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                                Submit Sql
                            </button>
                        </div>
                        
                        <br></br>
                        
                        <p>Possible Sql Files:</p>
                        <p>
                            {sqlfiles.data?.join(", ")}
                        </p>
                    </div>
                    <div className="py-2">
                    <hr></hr>
                    </div>
                    <div>
                        <p className="text-green-400">{result}</p>
                        <br></br>
                        <p className="text-red-500">{error}</p>
                    </div>
                </div>
            </main>
        </>
    )

};

export default Manage;