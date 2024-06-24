import { booksDatabase, generateId } from "../database/database";
import { TBooks, TUpdateBook } from "../interfaces/books.interface";

export class BooksServices {

    createBook(name: string, pages: number, category: string): TBooks {
        const newBook: TBooks = {
            id: generateId(),
            name,
            pages,
            category,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        booksDatabase.push(newBook);
        
        return newBook;
    }

    getBooks(query: string): TBooks[] {
        if(query) {
            const filterDb = booksDatabase.filter(book => book.name === query);

            return filterDb;
        }
        return booksDatabase;
    }

    getOneBook(id: string): TBooks {
        const bookById = booksDatabase.find(book => book.id === Number(id)) as TBooks;

        return bookById;
    }

    updateBook(id: string, body: TUpdateBook): TBooks {
        const findBook = booksDatabase.find(book => book.id === Number(id)) as TBooks;

        const newBook = {...findBook, ...body, updatedAt: new Date()};

        const bookIndex = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(bookIndex, 1 , newBook);

        return newBook;
    }

    deleteBook(id: string): void {
        const bookIndex = booksDatabase.findIndex(book =>  book.id === Number(id));

        booksDatabase.splice(bookIndex, 1);
    }
}