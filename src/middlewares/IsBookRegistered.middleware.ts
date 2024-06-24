import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsBookRegistered {
    static execute(req: Request, res: Response, next: NextFunction) {
        const verifyBook = booksDatabase.some(book => book.name === req.body.name);

        if(verifyBook) {
            throw new AppError(409, "Book already registered.");
        }

        return next();
    }
}