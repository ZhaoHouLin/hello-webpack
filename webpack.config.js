const path = require('path')

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
    }
}