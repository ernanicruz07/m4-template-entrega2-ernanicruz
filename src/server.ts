import { app } from "./app";

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
});

/* 
    Tasks:

    Entender melhor o uso de req.query e alterar a regra de negócio de GET /books;
    
    Verificar e substituir as tipagens da antiga interface pelas interfaces criadas com schema;
    
    Inserir os middlewares criados nas rotas que necessitam;
*/