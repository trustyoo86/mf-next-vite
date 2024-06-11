import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins = [
      ...config.plugins,
      new NextFederationPlugin({
        name: 'web',
        remotes: {
          todoApp: 'todoApp@http://localhost:3001/assets/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
      }),
    ];

    return config;
  },
};

export default nextConfig;
