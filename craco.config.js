module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss')
        ],
      },
    },
    webpack: (config) => {
      config.output.library = `react-dashboard`;
      config.output.libraryTarget = 'umd';
      config.output.jsonpFunction = `webpackJsonp_react`;
      config.output.globalObject = 'window';
      return config;
    },
    devServer: (_) => {
      const config = _;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      config.historyApiFallback = true;
      config.hot = false;
      config.watchContentBase = false;
      config.liveReload = false;
      return config;
    },
  }