const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins');


const nextConfig = {
    future: {
        webpack5: true,
    },
    i18n: {
        locales: ['en', 'sk'],
        defaultLocale: 'en',
    },
}

module.exports = withPlugins([nextTranslate()], nextConfig)