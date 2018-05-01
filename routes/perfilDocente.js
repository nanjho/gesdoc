const express = require('express');
const router = express.Router();
const docenteController = require('../controller/perfilDocente/perfilDocente');
const docenteActividadController = require('../controller/perfilDocente/actividadDocente');
const docenteCursosController = require('../controller/perfilDocente/cursosCiclo');
const docenteEncuestaController = require('../controller/perfilDocente/encuestasDocente');
const listaDocenteController = require('../controller/perfilDocente/listaDocentes');
const investigacionController = require ('../controller/perfilDocente/investigacionDocente');
const descargaController = require('../controller/perfilDocente/horasDescargaDocentes');


/* GET home page. */
//Muestra el json grande de docente
router.get('/docente/general', async function(req, res) {
    let jsonBlock;
    jsonBlock= await docenteController.devuelveDocente(req.query);
    res.send(jsonBlock);

s});

router.get('/docente/invDocente', async function(req, res) {
    let jsonBlock;
    jsonBlock = await investigacionController.devuelveListaInvestigacion(req.query);

    res.send(jsonBlock);
});

router.get('/docente/actDocente', async function(req, res) {
    let jsonBlock;
    jsonBlock = await docenteActividadController.devuelveListaActividad(req.query);

    res.send(jsonBlock);
});

router.get('/docente/curDocente', async function(req, res) {
    let jsonBlock;
    jsonBlock = await docenteCursosController.muestraCursoCiclo( req.query);

    res.send(jsonBlock);
});

router.get('/docente/encDocente', async function(req, res) {
    let jsonBlock;
    jsonBlock = await docenteEncuestaController.listaEncuestas(req.query);

    res.send(jsonBlock);
});

router.get('/docente/horaDescDocente', async function(req, res) {
    let jsonBlock;
    jsonBlock = await descargaController.horasDescarga(req.query);

    res.send(jsonBlock);
});


//Rutas para el registro/Actualizacion/delete de investigaciones

router.post('/investigacion/registrar',async function (req,res){ //Aqui ira el registro de investigaciones
    let jsonRes={}
    jsonRes.nuevo_id_investigacion=await investigacionController.registraInvestigaciones(req.body);
    res.send(jsonRes);

});

router.put('/investigacion/actualizar',async function (req,res){ //Aqui ira la actualizacion de investigaciones
    res.send("Aqui ira la actualizacion de investigaciones");

});
router.delete('/investigacion/eliminar',async function (req,res){ //Aqui ira la eliminacion de investigaciones
    res.send("Aqui ira la eliminacion de investigaciones");

});
router.get('/listaDocente', async function (req, res) {
    let queryResult = await listaDocenteController.listaDocente()
   res.send(queryResult) ;
});

router.get('/listaCiclos', async function (req, res) {
    let queryResult = await listaDocenteController.listaCiclos()
    res.send(queryResult) ;
});

module.exports = router;
