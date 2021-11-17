
//точка входа
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
};
//Точка выхода
//точка выхода как «dist». Префикс "[name]" соответствует названию файла в src
module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
}