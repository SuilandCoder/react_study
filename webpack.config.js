const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),   //源文件
    filename:'index.html'   //生成在内存中首页的名称
})

module.exports={
     mode:'development',//development production
    // entry: 'index.js',
    // output:{
    //     path: __dirname + '/dist',
    //     filename: 'index_bundle.js'
    // },
    plugins:[
        htmlPlugin
    ]
}