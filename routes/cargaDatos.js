const express = require('express');
const router = express.Router();
const cargaController = require("../controller/cargaDatos/cargaPrincipal");

/* GET home page. */
router.post('/cargaDatos', async function(req, res) {
    //let carga = await cargaController.cargaPrincipal(req.body);
    console.log(req.body)
    res.send(req.body);
});

module.exports = router;