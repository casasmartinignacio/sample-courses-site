import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import dictionaryEN from './i18n_EN.json';
import dictionaryES from './i18n_ES.json';

const resources = {
  en: {
    translation: dictionaryEN
  },
  es: {
    translation: dictionaryES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: window.localStorage.getItem('language') || 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
