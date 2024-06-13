import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      }
    ];
  },
  webpack: (config, options) => {
    const { isServer } = options;
    
    // config.output = {
    //   ...config.output,
    //   publicPath: 'http://localhost:3001/_next/'
    // }

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
