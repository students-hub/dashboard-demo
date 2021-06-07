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
          globalObject : 'window'
        }
        paths.appBuild=path.resolve(__dirname,"dist/react")
        return webpackConfig
      }
    },
    devServer:{
      headers : {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback : true,
      hot : false,
      watchContentBase : false,
      liveReload : false
    }
  }