import { TBooks } from "../interfaces/books.interface";

export const booksDatabase: TBooks[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}