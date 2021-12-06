const router = require('express').Router();

const getListOfLanguages = require('../application/getListOfLanguages');
const getCurrentLanguage = require('./../application/getCurrentLanguage');

const putCurrentLanguage = require('../application/putCurrentLanguage');
const getCurrentEpisodeId = require('./../application/getCurrentEpisodeId');
const dbConnection = require('./dbConnection');
const selectAllData = dbConnection.selectAllData;

// get idioma actual
router.route('/current').get(async (req, res) => {

    // logica para transformar lo que me llega
    result = await selectAllData();
    currentLanguage = getCurrentLanguage(result);
    res.json({ currentLanguage })
});

// get lista de idiomas
router.route('/list').get((req, res) => {
    idEpisode = req.params.idEpisode
    // aqui faltaria un try y catch y esas cosas
    test = getLanguageApplied(idEpisode)
    res.json({ test, idEpisode })
});


// put cambiar idioma, body.language
router.route('/changeTo').put((req, res) => {
    language = req.body.language;
    putCurrentLanguage(language);
    // aqui faltaria un try y catch y esas cosas
    test = getLanguageApplied(idEpisode);
    res.json({ test, idEpisode });
});

module.exports = router
// key
// Serie
// temporada
// idiomas = {
//     idioma
//     audio_file.mp3

// }

// subtitulos = {
//     subtitulos
//     File.srt
// }

// reporte = {

//     id
//     fecha
//     contenido
//     userid
// }

// idioma
// subtitulo
// tiempo