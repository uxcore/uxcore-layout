var fs = require('fs');
var webpack = require('webpack');

// 扫描uxcore组件目录下的所有module
function getUxcoreModuleAlias() {
    var alias = {};

    // 判断是否存在uxcore目录
    if (!fs.existsSync('./uxcore')) return alias;

    var modules = fs.readdirSync('./uxcore');
    modules.forEach(function (name) {
        alias[name] = [process.cwd(), 'uxcore', name, 'src'].join('/');
    });
    return alias;
}

module.exports = {
    cache: false,
    entry: {
        demo: './demo/index'
    },
    output: {
        path: './dist',
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devtool: '#source-map', // 这个配置要和output.sourceMapFilename一起使用
    module: {
        loaders: [
            {

                test: /\.js(x)*$/,
                // uxcore以外的modules都不需要经过babel解析
                exclude: function (path) {
                    var isNpmModule = !!path.match(/node_modules/);
                    var isUxcore = !!path.match(/node_modules\/uxcore/);
                    return isNpmModule & !isUxcore;
                },
                loader: 'babel-loader?stage=1'
            }
        ]
    },
    resolve: {
       // alias: getUxcoreModuleAlias()
    },
    externals: {
        react: 'var React' // 相当于把全局的React作为模块的返回 module.exports = React;
    },
    plugins: [
        new webpack.DefinePlugin({
          __LOCAL__: true, // 本地环境
          __DEV__:   true, // 日常环境
          __PRO__:   false // 生产环境
        })
    ]
};