module.exports = {
  devServer: {
    port: 3002,
  },
  plugins: [
    {
      plugin: require('./craco-plugins/module-federation'),
    },
  ],
  webpack: {
    plugins: {
      remove: ['ModuleScopePlugin'],
    },
  },
};
