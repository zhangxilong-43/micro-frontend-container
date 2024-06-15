const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const host = "127.0.0.1";
const port = "9091";

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/index.jsx"),
    output: {
      filename: "static/js/[name].js", 
      path: path.join(__dirname, "./dist"), 
      clean: true,
      publicPath: `http://${host}:${port}/`,
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/preset-react", {
                "runtime": "automatic"
              }]
            ]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "micro-frontend-container",
        filename: "index.html",
        inject: true, // 自动注入静态资源
        hash: false,
        cache: false,
        // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
        template: path.join(__dirname, "./public/index.html"),
        // 压缩html资源
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true, //去空格
          removeComments: true, // 去注释
          minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
          minifyCSS: true, // 缩小CSS样式元素和样式属性
        },
        nodeModules: path.resolve(__dirname, "./node_modules"),
      }),
      new ModuleFederationPlugin({
        name: 'project_container',
        filename: 'remoteEntry.js',
        exposes: {
          './Editor': './src/Components/Editor',
        },
        shared: { // 统一 react 等版本，避免重复加载
          react: {
            singleton: true,
            eager: true
          },
          'react-dom': {
            singleton: true,
            eager: true
          }
        },
      }),
    ],
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      host,
      port,
      open: true, // 是否自动打开
      compress: false, // gzip压缩,开发环境不开启，提升热更新速度
      hot: true, // 开启热更新
      historyApiFallback: true, // 解决history路由404问题
      static: {
        directory: path.join(__dirname, "./public"), // 托管静态资源public文件夹
      },
      headers: { "Access-Control-Allow-Origin": "*" },
    }
};