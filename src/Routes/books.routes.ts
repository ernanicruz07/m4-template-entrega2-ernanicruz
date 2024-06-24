import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { IsTheBookIdValid } from "../middlewares/isTheBookIdValid.middleware";
import { IsBookRegistered } from "../middlewares/IsBookRegistered.middleware";
import { ValidateRequest } from "../middlewares/ValidateRequest.middleware";
import { createBookSchema, querySchema, updateBookSchema } from "../schemas/books.schema";

export const booksRouter = Router();

const booksController = new BooksController();

booksRouter.post("/", ValidateRequest.execute({ body: createBookSchema }), IsBookRegistered.execute, booksController.createBook);

booksRouter.get("/", ValidateRequest.execute({ query: querySchema }), booksController.getBooks);

booksRouter.get("/:id", IsTheBookIdValid.execute, booksController.getOneBook);

booksRouter.patch("/:id", ValidateRequest.execute({ body: updateBookSchema }), IsTheBookIdValid.execute, IsBookRegistered.execute, booksController.updateBook);

booksRouter.delete("/:id", IsTheBookIdValid.execute, booksController.deleteBook);