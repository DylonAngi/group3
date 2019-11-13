//common js for finding out path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


//module with all of our settings
module.exports = {
    //entry point for our project
    plugins: [
        new CopyPlugin([
            { from: 'src/assets/data.json', to: 'data.json' }
        ]),
        new HtmlWebpackPlugin({
            title: 'graphs',
            template: 'src/assets/index.html',
            files:{
                data:'src/assets/data.json'
            }
        }),
        new CleanWebpackPlugin(),
    ],
    //output for our files
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    //server settings
    devServer:{
        port:3301,
        contentBase: path.join(__dirname, 'dist')
    },
    watch: true,
    devtool: 'source-map',
    module: {
        //rules for conversion
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}