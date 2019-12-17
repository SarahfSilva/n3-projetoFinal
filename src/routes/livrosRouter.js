const express = require('express');
const router = express.Router();

const controller = require("../controller/livrosControllers")
 

router.get("/catalogo", controller.exibirTodos)
router.post ("/criar", controller.criarLivro)
router.patch("/exibicao/:id", controller.atualizarLivro)
router.delete("/remover/:id", controller.deletarLivro)

module.exports = router
