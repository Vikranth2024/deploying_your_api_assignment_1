require('dotenv').config();

const config = {
    apiKey : process.env.API_KEY,
    serverSecret : process.env.SERVER_SECRET,
    isKalvian : process.env.IS_KALVIAN === 'true',
}

module.exports = config;

if (process.env.is_PRODUCTION === 'true') {
    console.log(config);
}
else{
    console.log('Config loaded');
}
