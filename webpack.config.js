//call for requirements in path and webpack
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack  = require("webpack");

module.exports = {
    entry: {
        app:'./assets/js/script.js',
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        //the name of each entry object will be put in the [name]
        filename: '[name].bundle.js',
        path: __dirname + 'dist'
    },
    //used within webpack to help understand what languages you are using
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outputs to an HTML file in the dist folder
        })
    ],
    mode: 'development'
}