const path = require('path')

module.exports = {
	entry: './src/index.js',
	mode: 'development', // production
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './dist',
  },
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
			{
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },
}