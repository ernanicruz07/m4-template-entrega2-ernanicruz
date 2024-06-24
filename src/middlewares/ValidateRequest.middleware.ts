import { Request, Response, NextFunction } from "express";
import { RequestSchemas } from "../interfaces/books.interface";

export class ValidateRequest {
    static execute(schemas: RequestSchemas) {

        return async (req: Request, res: Response, next: NextFunction) => {
            if (schemas.params) {
                req.params = await schemas.params.parseAsync(req.params);
            }
            
            if(req.query.search) {
                if(schemas.query) {
                    await schemas.query.parseAsync({name: req.query.search});
                }
            }
            
            if (schemas.body) {
                req.body = await schemas.body.parseAsync(req.body);
            }
            
            next();
        }
    }
}