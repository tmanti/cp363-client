/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
        onSettled(data) {
            if(data){
                setQueryResults(data);
            }
        },
    })

    const executeSqlQuery = api.table.file_query.useMutation({
        onSettled(data) {
            if(data){
                setQueryResults(data);
            }
        },
    })

    const query_db = (table:string)=>{
        getTableContents.mutate({table_name:table});
    }

    const advanced_query = (sql_file:string)=>{
        executeSqlQuery.mutate({sql_file:sql_file});
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
                    onClick={()=>{void router.push("/manage");}}
                >
                    Database Control Page
                </button>
                <div className="py-2">
                <hr></hr>
                </div>
                <div> 
                    <div className="flex">
                    <button
                        type="button"
                        onClick={()=>{query_db("Address")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Address Table

                    </button>
                    <button
                        type="button"
                        onClick={()=>{query_db("booked")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query booked Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Booking")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Booking Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Customer")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Customer Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Department")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Department Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Employee")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Employee Table
                    </button>
                    </div>
                    <div className="flex">
                    <button
                        type="button"
                        onClick={()=>{query_db("Room")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Room Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("RoomCard")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query RoomCard Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Service")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Service Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Shift")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Shift Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("Transaction")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query Transaction Table
                    </button>

                    <button
                        type="button"
                        onClick={()=>{query_db("used_services")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Query used_services Table
                    </button>
                    </div> 
                </div>
                <div className="py-2">
                <hr></hr>
                </div>
                <div className="flex">
                    <button
                        type="button"
                        onClick={()=>{advanced_query("average_service.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Get Average Service Spend
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("average_spent.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Calculate Average Spent
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("booking_with_service.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Bookings With Service
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("city_counts.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        City Counts
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("service_count.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Booking Services Used Counts
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("transaction_query.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Bookings Charged Amounts
                    </button>

                     <button
                        type="button"
                        onClick={()=>{advanced_query("used_services_sum.sql")}}
                        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Bookings Used Service Sum
                    </button>

                </div>
                <div className="py-2">
                <hr></hr>
                </div>
                <div>
                <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
                        <thead>
                            <tr>
                                {queryResult && 
                                Object.keys(queryResult.rows[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {queryResult &&
                                queryResult.rows.map((row:any, i:any) => (
                                <tr key={i}>
                                    {Object.keys(row).map((key) => (
                                    <td key={key}>{row[key].toString()}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Tables;