const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/App.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ],    
    devServer: {
        stats: "errors-only",
        port: 9000
    }
};