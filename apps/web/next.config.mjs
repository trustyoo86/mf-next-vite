import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(new NextFederationPlugin({
      name: 'web',
      remotes: {
        shopping: 'shopping@http://localhost:3002/remoteEntry.js',
      },
      filename: 'static/chunks/remoteEntry.js',
    }));

    return config;
  },
};

export default nextConfig;
