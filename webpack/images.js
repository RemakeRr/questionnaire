module.exports = function() {
    return {
        module: {
            rules: [
                /*{
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    loaders: [
                      'file-loader',
                      {
                        loader: 'image-webpack-loader',
                        query: {
                          progressive: true,
                          optimizationLevel: 1,
                          interlaced: false,
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          }
                        }
                      }
                    ]
                }*/
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },              
            ],
        },
    };
};
