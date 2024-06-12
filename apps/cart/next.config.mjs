import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(new NextFederationPlugin({
      name: 'cart',
      // remotes: {
      //   todoApp: 'todoApp@http://localhost:3001/assets/remoteEntry.js',
      //   shopping: 'shopping@http://localhost:3002/remoteEntry.js',
      // },
      exposes: {
        './Test': './src/components/Test.tsx',
      },
      filename: 'static/chunks/remoteEntry.js',
    }));

    return config;
  },
};

export default nextConfig;
