const express = require('express');
const router = express.Router();
const VerifyToken = require('../auth/VerifyToken');

const ayudasEconomicasAsistenteController = require('../controller/ayudasEconomicas/ayudasEconomicasAsistente.js'); //carlos
const ayudasEconomicasJefeController = require('../controller/ayudasEconomicas/ayudasEconomicasJefe.js'); //moises
const ayudasEconomicasController = require('../controller/ayudasEconomicas/ayudasEconomicas');




router.get('/ayudasEconomicas/listar',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.ayudaEconomica = await ayudasEconomicasJefeController.devuelveAyudasEconomicas(req.query,req.body);
    res.send(jsonBlock);
});
router.get('/ayudasEconomicas/devuelveJustificacion',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.ayudaEconomica = await ayudasEconomicasJefeController.devuelveAyudaEconomicaJustificacion(req.query);
    res.send(jsonBlock);
});
router.get('/ayudasEconomicas/filtrar',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.ayudaEconomica = await ayudasEconomicasJefeController.devuelveAyudasEconomicasFiltro(req.query);
    res.send(jsonBlock);
});
router.get('/ayudasEconomicas/detallar',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.ayudaEconomica = await ayudasEconomicasJefeController.devuelveDetalleAyudaEconomica(req.query);
    res.send(jsonBlock);
});

router.put('/ayudasEconomicas/modificar',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.mensaje = await ayudasEconomicasJefeController.modificarAyudaEconomica(req.body);
    res.send(jsonBlock);
});
//registrar ayudaEconomica
router.post('/ayudasEconomicas/registrar',VerifyToken, async function (req,res) {
    let jsonBlock = {}
    jsonBlock = await ayudasEconomicasAsistenteController.registrarAyudaEconomica(req.body);
    res.send(jsonBlock);
});

//registrar gasto
router.post('/ayudasEconomicas/DocumentoGasto/registrar',VerifyToken, async function (req,res) {
    let jsonBlock = {}
    jsonBlock = await ayudasEconomicasAsistenteController.registrarDocumentoGasto(req.body);
    res.send(jsonBlock);
});

//listar motivo
router.get('/ayudasEconomicas/motivos',VerifyToken,async function (req,res){
    let jsonBlock={};
    jsonBlock.motivos = await ayudasEconomicasController.listarMotivos(req.query);
    res.send(jsonBlock);
});


//modificar ayuda economica
router.put('/ayudasEconomicasAsistente/modificar',VerifyToken,async function (req,res){
    let jsonRes={}
    jsonRes.mensaje=await ayudasEconomicasAsistenteController.modificarAyudaEconomica(req.body);
    res.send(jsonRes);

});

//eliminar ayuda economica
router.delete('/ayudasEconomicasAsistente/rechazar',VerifyToken,async function (req,res){
    let jsonRes={}
    console.log(JSON.stringify(req.body));
    jsonRes.mensaje=await ayudasEconomicasAsistenteController.rechazaAyudaEconomica(req.body);
    res.send(jsonRes);
});

//eliminar eliminar justificacion
router.delete('/ayudasEconomicasAsistente/DocumentoGasto/eliminar',VerifyToken,async function (req,res){
    let jsonRes={}
    console.log(JSON.stringify(req.body));
    jsonRes.mensaje=await ayudasEconomicasAsistenteController.eliminarDocumentoGasto(req.body);
    res.send(jsonRes);
});

module.exports = router;

