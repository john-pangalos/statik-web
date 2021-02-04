/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    splitting: true,
    bundle: true,
    minify: true,
    treeshake: true,
    target: "es2020",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    sourcemap: true,
  },
  buildOptions: {
    sourcemap: true,
  },
};
