import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
        })
})