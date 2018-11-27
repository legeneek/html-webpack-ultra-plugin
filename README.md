# html-webpack-ultra-plugin

maybe you used `html-wepack-plugin` and bunch of other plugins still didn't get your html right, try this webpack plugin to process html as you wish. 

## install

```
npm i -D html-webpack-ultra-plugin
```

## usage

put this `after` html-webpack-plugin or other html generate plugin. pass a modifier to this plugin to modify your html

**webpack.config.js**

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackUltraPlugin = require('html-webpack-ultra-plugin')

function modifier (html, name) {
  // modify html as you wish
  return html
}

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // other plugins...
    new HtmlWebpackUltraPlugin({modifier: modifier})
  ]
}
```

## option

| name | type | desc |
|:---|:---|:---|
| modifier | function | html modify function. args: `html`(html content to modify, string type) and `name`(html file name, string type)
