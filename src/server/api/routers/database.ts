import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as fs from 'fs';
import type Pool from "mysql2/typings/mysql/lib/Pool";

const read_sql = (file:string):string=>{
    return fs.readFileSync("db/"+file).toString()
}

const parse_batch = (sql:string):string[]=>{
    return sql.split("/");
}

const query_batch = (sql_batch:string[], mysql:Pool)=>{
    mysql.getConnection((err, conn)=>{
        if(err){ console.error(err); return; }
        for(const query of sql_batch){
            conn.query(query, (conn_err, result)=>{
                if(conn_err){ console.error(conn_err); return; }
                console.log(result);
            })
        }
    })
}

export const databaseRouter = createTRPCRouter({
    createDatabase: publicProcedure
        .mutation(({ctx})=>{
            const sql = read_sql("create_database.sql")

            ctx.mysql.query(sql, (err, result)=>{
                if(err){ console.error(err); return; }
                console.log(result)
            })
        }),
    createTables: publicProcedure
        .mutation(({ ctx }) =>{
            const sql = read_sql("create_tables.sql")
            query_batch(parse_batch(sql), ctx.mysql);
        }),
    populate: publicProcedure
        .mutation(({ctx})=>{
            const sql = read_sql("populate_tables.sql")

            query_batch(parse_batch(sql), ctx.mysql);
        }),
    dropAll: publicProcedure
        .mutation(({ ctx })=>{
            const sql = read_sql("drop_tables.sql");

            query_batch(parse_batch(sql), ctx.mysql);
        }),
    execSqlFile: publicProcedure
        .input(
            z.object({
                sql_file:z.string(),
            })
        )
        .mutation(({ ctx, input })=>{
            const sql = read_sql(input.sql_file);

            query_batch(parse_batch(sql), ctx.mysql);
        }),
    
    getSqlFiles: publicProcedure
        .query(()=>{
            return fs.readdirSync("db/manage/");
        })
})  