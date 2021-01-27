const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  ru: 'ru',
  ua: 'ua',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
