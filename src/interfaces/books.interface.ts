import { AnyZodObject, z } from "zod";
import { bookSchema, createBookSchema, updateBookSchema } from "../schemas/books.schema";

export type TBooks = z.infer<typeof bookSchema>;
export type TCreateBook = z.infer<typeof createBookSchema>;
export type TUpdateBook = z.infer<typeof updateBookSchema>;

export interface RequestSchemas {
    params?: AnyZodObject;
    query?: AnyZodObject;
    body?: AnyZodObject;
}