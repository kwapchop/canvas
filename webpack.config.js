const path = require('path');

module.exports = {
    mode:'development',
    entry: './module/App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'App.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 3003,
    },
};