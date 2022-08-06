const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader
        },
        'css-loader'
    ]
    if(extra) {
        loaders.push(extra);
    }
    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx'],
        analytics: './someFiles.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.jpg'],
        alias: {
            '@pictures': path.resolve(__dirname, 'src/assets'),
            '@': path.resolve(__dirname, 'src'),
    }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: cssLoaders()
            },

            {
                test: /\.(less)$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },

            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: 'file-loader'
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',
                        '@babel/preset-typescript'
                        ]
                    }
                }
            },

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}

