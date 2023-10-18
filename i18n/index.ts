import { createI18n } from 'vue-i18n';
const i18n = createI18n({
    legacy: false,
    locale: 'ta',
    globalInjection: true,
    messages: {
        en: {
            welcome: 'welcome',
            login: 'login',
            logout: 'logout',
            UserName: 'UserName',
            Password: 'Password'
        },
        ta: {
            welcome: 'வரவேற்பு',
            login: 'உள்நுழைய',
            logout: 'வெளியேறு',
            UserName: 'பயனர் பெயர்',
            Password: 'கடவுச்சொல்'
        },
        te: {
            welcome: 'స్వాగతం',
            login: 'ప్రవేశించండి',
            logout: 'లాగ్అవుట్',
            UserName: 'వినియోగదారు పేరు',
            Password: 'పాస్వర్డ్'
        }
    }
})

export { i18n as default }