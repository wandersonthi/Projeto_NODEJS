const mongodb = require('mongodb').MongoClient;
const url = "mongodb+srv://wandersonthi:<seu Pass>@cluster0.1g0onws.mongodb.net/";

mongodb.connect(url, (erro, banco) => {
    if (erro) throw erro;
    const dbo = banco.db("wrcursos");
    const obj = { curso: "curso de Node", sala: "sites dinamicos" };
    const colecao = "cursos";
    dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
        if (erro) throw erro;
        console.log("1 novo curso inserido");
        banco.close();
    });
});
