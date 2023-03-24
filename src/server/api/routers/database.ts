import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as fs from 'fs';

const read_sql:string[] = (file:string)=>{
    return fs.readFileSync("db/"+file).toString()
}

export const databaseRouter = createTRPCRouter({
    createDatabase: publicProcedure
        .mutation(async ({ctx})=>{
            const sql = read_sql("create_database.sql")

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        }),
    createTables: publicProcedure
        .mutation(async ({ ctx }) =>{
            const sql = read_sql("create_tables.sql")

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        }),
    populate: publicProcedure
        .mutation(async ({ctx})=>{
            const sql = read_sql("populate_tables.sql")

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        }),
    dropAll: publicProcedure
        .mutation(async ({ ctx })=>{
            const sql = read_sql("drop_tables.sql");

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        }),
    execSql: publicProcedure
        .input(
            z.object({
                sql_file:z.string(),
            })
        )
        .mutation(async ({ ctx, input })=>{
            const sql = read_sql(input.sql_file);

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        })
})  