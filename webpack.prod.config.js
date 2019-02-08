const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/App.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.min.js",
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
    }
};