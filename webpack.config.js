const path = require('path');

module.exports = {
    mode:'development',
    entry: './module/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 3003,
    },
};