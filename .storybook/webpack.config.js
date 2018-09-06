const testConfig = require('../webpack.config.js')()

module.exports = {
  resolve: {
    extensions: testConfig.resolve.extensions,
    modules: testConfig.resolve.modules,
  },
  module: {
    rules: testConfig.module.rules,
  },
}
