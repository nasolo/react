module.exports = {
    entry:'./src/client.js',
    output: {
        path: './public',
        filename: 'bundle.js'
   },
   module:{
       loader:[
           {
               test:/\.js$/,
               loader: 'babel-loader'
           }
       ]
   },



}