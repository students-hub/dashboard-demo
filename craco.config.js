const path= require('path')
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss')
        ],
      },
    },
    webpack:{
      configure: (webpackConfig, { env, paths })=>{
        webpackConfig.output={
          ...webpackConfig.output,
          library : `react-dashboard`,
          libraryTarget : 'umd',
          jsonpFunction : `webpackJsonp_react`,
          globalObject : 'window',
   publicPath: '/child/react/',
    path: path.resolve(__dirname,"dist/react")
        }
        paths.appBuild=path.resolve(__dirname,"dist/react")
        return webpackConfig
      }
    },
    devServer:{
      port:3031,
      headers : {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback : true,
      hot : false,
      watchContentBase : false,
      liveReload : false
    }
  }