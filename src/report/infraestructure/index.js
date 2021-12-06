const router = require('express').Router();
//const language = require('./../domain/language');

// ok so watch_episode

// get all idiomas del episodio actual
// get idioma del episodio actual
// put idioma al episodio actual (file)
// put update idioma del episodio actual en DB

// get all subtitules del episodio actual
// get subtitulo del episodio actual
// put subtitulo al episodio actual (file)
// put update subtitulo del episodio actual en DB

// call select episode?
// reportar problema
// adelantar episodio
// get time of view of episode
// put time of view of episode en DB


// routes for idioma/language
// retorna el lenguaje del episodio actual.... necesita un id?
router.route('/').get((req, res)=>{
    // test = language
    res.json({asdf:"asdf"})
});

// // cambia el lenguaje del episodio
// router.route('/').put((req, res)=>{
//     new_language = req.body.language;
//     res.json({new_language});
// });

// // get subtitulo del episodio actual
// router.route('/').get((req, res)=> {
//     subtitle = [""];
//     res.json({subtitle});
// });

// // put subtitulo al episodio actual
// router.route('/').put((req, res)=>{
//     msg = `test for ${req.query.name || "World"} from the query`;
//     res.json({msg});
// });

// // get time of the state of the episode
// router.route('/:variable').get((req, res)=>{
//     test = req.params.variable 
//     res.json({test});
// });

// // put time of the state of the episode in the db
// router.route('/').put((req, res)=>{
//     msg = `test for ${req.query.name || "World"} from the query`;
//     res.json({msg});
// });

module.exports = router;