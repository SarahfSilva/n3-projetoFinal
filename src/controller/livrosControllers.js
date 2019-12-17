const livrosCollection = require('../model/livrosSchema')


const exibirTodos = (request, response) => {
    livrosCollection.find((error, livros)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send(livros)
        }
    })
}

const criarLivro = (request, response) => {
    const livroNome = request.body.nome;
    const livroAutor = request.body.autor;
    const livroResenha = request.body.resenha;
    const livroLido = request.body.lido
    const livro = new livrosCollection({nome: livroNome, autor: livroAutor, resenha: livroResenha, lido: livroLido})
    livro.save((error) => {
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(201).send(livro)
        }
    })
}

const atualizarLivro = (request, response) =>{
    const id = request.params.id
    const livroDoBody = request.body
    const options = {new:true}

    livrosCollection.findByIdAndUpdate(id,livroDoBody,options,(error,livro) =>{
        if(error){
            return response.status(500).send(error)

        }else{
            if(livro){
                return response.status(200).send(livro)
            }else{
                return response.status(404).send('Esse livro não existe na base, revise o ID.')
            }
        }
    })

}
const deletarLivro = (request, response) =>{
    const id = request.params.id
    livrosCollection.findByIdAndRemove(id,(error, livro) =>{
        if(error){
            return response.status(500).send(error)
        }else if(livro){
            return response.status(200).send('Livro excluído com sucesso!' )
        }
        else{
            return response.sendStatus(404)
        }
    })
}

module.exports = {
    exibirTodos,
    criarLivro,
    atualizarLivro,
    deletarLivro    
}