'use strict';
/* global __dirname, process; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
let data = new Date();
let time = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`;
let logBasePath = process.env.NODEJS_LOG_PATH || './logs';

module.exports = {
    root: __dirname,
    logs: {
        runtime: `${logBasePath}/runtime/${time}.log`,
        server: `${logBasePath}/server/${time}.log`
    },
    server: {
        ip: '0.0.0.0',
        port: 8081
    },
    database: {
        dbName: process.env.NODEJS_DB_NAME  || 'nodejs',
        host: process.env.NODEJS_DB_HOST    || 'localhost',
        port: process.env.NODEJS_DB_PORT    || 27017,
        user: process.env.NODEJS_DB_USER    || '',
        pass: process.env.NODEJS_DB_PASS    || ''
    },
    resources: [
        'main/mainResource'
    ]
};
