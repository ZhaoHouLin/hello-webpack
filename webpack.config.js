const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('css/[name].css')

// console.log("__dirname:",__dirname)
// console.log("resolve:",path.resolve(__dirname,'./src'))
// console.log(process.env.NODE_ENV)

module.exports = {
    context: path.resolve(__dirname,'src'),
    //path.resolve(當前目錄相對路徑,絕對路徑) 存放進入點檔案的資料夾路徑
    entry: {
        index: './js/index.js',
    },
    output: {
        path: path.resolve(__dirname,'dist'), 
        filename: './js/[name].js',
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            // {
            //     test: /\.pug$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.styl$/,
                // use: ['css-loader','stylus-loader']
                use: extractCSS.extract(['css-loader','postcss-loader','stylus-loader'])
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'pug/index.pug',    // 注意index.pug放的位置
            chunks: ['index']
        }),
        extractCSS
    ]
}