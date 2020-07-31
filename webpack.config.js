/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    '@teamsupercell/typings-for-css-modules-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        historyApiFallback: true
    }
};
