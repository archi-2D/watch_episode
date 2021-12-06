// get idioma del episodio actual
// aqui toca poner lo de las entidad o dominio del sistema que ni idea xDxDxdxdx
const isAValidLanguage = require('../domain');

const getCurrentLanguage = (dbRow) => {
    currentLanguage = dbRow[0].current_language;
    if(isAValidLanguage(currentLanguage))
        return currentLanguage;
    return `Current language not valid, create a ticket for ${currentLanguage}`
}

module.exports = getCurrentLanguage