const mongodb=require(mongodb).MongoClient
const url="mongodb+srv://wandersonthi:10Demaiovida@cluster0.1g0onws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

mongodb.conect(url, (erro,banco)=>{
    if(erro)throw erro;
    const dbo=banco.db("wrcursos")
    const obj={curso:" curso de Node", sala:"sites dinamicos"}
    const colecao="cursos"
    Boolean.collection(colecao).insertOne(obj,(erro,resultato)=>{
        if(erro)throw erro
        console.log("1 novo curso inserido")
        banco.close()


    })
})
