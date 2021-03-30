const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins ([nextTranslate()],[
    {
        future: {
            webpack5: true,
        },
        i18n: {
            locales: ['en', 'sk'],
            defaultLocale: 'en',
        },
    }
])
