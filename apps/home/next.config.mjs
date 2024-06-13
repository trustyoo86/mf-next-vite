import NextFederationPlugin from '@module-federation/nextjs-mf';

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    cart: `cart@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    shopping: `shopping@http://localhost:3002/remoteEntry.js`,
    todo: 'todo@http://localhost:3003/assets/remoteEntry.js'
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.output = {
      ...config.output,
      publicPath: 'http://localhost:3000/_next/'
    }
    config.cache = false;
    console.log('isServer =>', isServer);
    config.plugins.push(new NextFederationPlugin({
      name: 'home',
      remotes: remotes(isServer),
      filename: 'static/chunks/remoteEntry.js',
    }));

    return config;
  },
};

export default nextConfig;
