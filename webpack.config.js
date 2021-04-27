const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const localOrProd = process.env.NODE_ENV ? 'production' : 'development';

module.exports = {
    entry: './src/index.ts',
    mode: localOrProd,
    watch: localOrProd,
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new NodemonPlugin(),
    ],
}