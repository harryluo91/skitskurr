module.exports = {
  staticFileGlobs: [
    'src/**.html',
    'src/**.js',
    'src/**.css',
    'src/assets/images/*',
    'src/assets/icons/*'
  ],
  runtimeCaching: [{
    urlPattern: /^http:\/\/localhost:4200\//,
    handler: 'networkFirst'
  }],
  root: 'src',
  stripPrefix: 'src',
  navigateFallback: 'src/index.html'
};
