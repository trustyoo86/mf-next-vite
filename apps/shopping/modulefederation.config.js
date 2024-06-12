const deps = require('./package.json').dependencies;

module.exports = {
  name: 'shopping',
  exposes: {
    './Test': './src/components/Test.tsx',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
      eager: true,
    },
  },
};
