const express = require('express');
const router = express.Router();

const controller = require("../controller/livrosControllers")
 

router.get("/", controller.exibirTodos)
router.post ("/inserir", controller.criarLivro)
router.patch("/atualizar/:id", controller.atualizarLivro)
router.delete("/deletar/:id", controller.deletarLivro)

module.exports = router
