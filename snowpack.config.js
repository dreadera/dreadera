/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },

  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],

  routes: [],

  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },

  packageOptions: {},

  devOptions: {},

  buildOptions: {},

  alias: {
    '@client': './src',
  },
};
