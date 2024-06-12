
/**
 * HtmlWebpackPlugin is a webpack plugin that simplifies the creation of HTML files to serve your webpack bundles.
 * It automatically injects the generated bundles into the HTML file and provides options for customizing the output.
 *
 * @typedef {import('html-webpack-plugin')} HtmlWebpackPlugin
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * ModuleFederationPlugin is a plugin provided by webpack that enables module federation.
 * It allows you to share code between multiple applications or microfrontends.
 */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',

    /**
     * Configuration for the development server.
     */
    devServer: {
        port: 3100,
        open: true, // Add this line to open the browser automatically
        historyApiFallback: { index: "/", disableDotRule: true },
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .jsx extension
    },

    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ['style-loader', 'css-loader',{
                  loader: "postcss-loader",
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // new ModuleFederationPlugin({
        //     name: 'awesome-app',
        //     filename:
        //       'remoteEntry.js',
        //     remotes:{
        //         productapp: 'productapp@http://localhost:3200/remoteEntry.js'
        //     },
        //     shared: {
        //       react: { singleton: true, eager: true },
        //       'react-dom': { singleton: true, eager: true },
        //       'react-redux': { singleton: true, eager: true },
        //       redux: { singleton: true, eager: true },
        //     },
        //   })
    ],
};