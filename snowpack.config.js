// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    www: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      'snowpack-plugin-posthtml',
      {
        root: './www/',
        encoding: 'utf-8',
      },
    ],
    ['@snowpack/plugin-sass'],
    ['@snowpack/plugin-webpack'],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    sourcemap: false,
    treeshake: true,
    splitting: true,
  },
}
