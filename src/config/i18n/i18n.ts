import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/sport-rec' : '/sport-rec/public';

i18n
    .use(HttpApi)
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: {
            'ru-RU': ['ru'],
            'default': ['en']
        },
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend : {
            loadPath: `${basePath}/locales/{{lng}}/{{ns}}.json`
        },
        ns: ['main'],
        defaultNS: 'main', // неймспейс по умолчанию для страницы настроек
        react: {
            useSuspense: false,
        },
    });


export default i18n;
