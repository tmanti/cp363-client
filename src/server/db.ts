import { createPool } from "mysql2";

import { env } from "~/env.mjs";

export const mysql = createPool({
    connectionLimit:100,

    host:env.DATABASE_HOST,
    user:env.DATABASE_USER,
    password:env.DATABASE_USER_PASS,
    database:env.DATABASE
})