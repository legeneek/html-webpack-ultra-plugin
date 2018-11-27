class HtmlWebpackUltraPlugin {
  constructor(options) {
    this.options = Object.assign({}, options)
  }
  apply (compiler) {
    const me = this
    compiler.hooks.emit.tap('HtmlWebpackUltraPlugin', (compilation) => {
      if (typeof this.options.modifier !== 'function') {
        return 
      }

      const files = Object.keys(compilation.assets)
      const htmlReg = /\.html$/
      files.map((name) => {
        if (htmlReg.test(name)) {
          let asset = compilation.assets[name]
          let html = asset.source()
          html = me.options.modifier(html, name)
          asset.source = () => html
          asset.size = () => html.length
        }
      })
    })
  }
}

module.exports = HtmlWebpackUltraPlugin