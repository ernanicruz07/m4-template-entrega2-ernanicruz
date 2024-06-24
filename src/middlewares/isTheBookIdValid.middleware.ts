import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsTheBookIdValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        const validateBook = booksDatabase.some(book => book.id === Number(req.params.id));

        if(!validateBook) {
            throw new AppError(404, "Book not found.");
        }

        return next();
    }
}