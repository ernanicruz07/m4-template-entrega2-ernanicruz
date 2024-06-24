import "express-async-errors";
import helmet from "helmet";
import express, { json } from "express";
import { booksRouter } from "./Routes/books.routes";
import { HandleErrors } from "./middlewares/HandleErrors.middleware";

export const app = express();

app.use(helmet());
app.use(json());
app.use("/books", booksRouter);
app.use(HandleErrors.execute);