const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'WLOGGER',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        PRODUCTION: false,
        DOMAIN_PRODUCTION: '',
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        FB_APP_ID: '1983920111740227'
    }
});