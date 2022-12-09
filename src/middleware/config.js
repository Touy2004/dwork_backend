import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;
export const database_url = process.env.DATABASE_URL;