export default {
  pages: ["pages/index/index"],

  plugins: {
    myPlugin: {
      version: "dev",
      provider: "{{currentPluginId}}",
    },
  },
};
