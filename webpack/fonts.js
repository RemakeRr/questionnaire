module.exports = function() {
    return {
        module: {
            rules: [
                { test: /\.(woff2?)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
                { test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' },
            ],
        },
    };
};