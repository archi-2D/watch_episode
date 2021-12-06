
const isAValidLanguage = (language)=> {
  switch (language) {
    case 'en':
      return true;
    case 'es':
      return true;
    default:
      return false;
  }
}

module.exports = isAValidLanguage;