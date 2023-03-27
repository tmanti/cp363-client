/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import * as fs from 'fs';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const read_sql = (file:string):string=>{
    return fs.readFileSync("db/"+file).toString();
}

//for table specific queries
export const tableRouter = createTRPCRouter({
    select_all: publicProcedure
        .input(z.object({
            table_name:z.string()
        }))
        .mutation(async ({ ctx, input })=>{
            const sql = "SELECT * FROM `HotelManagement`." + input.table_name;

            const pool =  ctx.mysql.promise();

            const [rows, fields] =  await pool.query(sql);

            return {
                rows:rows,
                fields:fields
            }
        }),
    file_query: publicProcedure
        .input(z.object({
            sql_file:z.string()
        }))
        .mutation(async ({ ctx, input })=>{
            const sql = read_sql(input.sql_file);        

            const pool = ctx.mysql.promise();

            const [rows, fields] = await pool.query(sql);

            return {
                rows: rows,
                fields:fields,
            }
        }),
})