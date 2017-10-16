/**
 * Global debug variable.
 * Will return true if env is not production.
 * @type {Boolean}
 */
var debug = process.env.NODE_ENV !== 'production';
/**
 * Import Webpack.
 * @type {Module}
 */
var webpack = require('webpack');
/**
 * Import Path.
 * @type {Module}
 */
var path = require('path');

/**
 * Define our module object.
 * @type {Object}
 */
module.exports = {
	context: path.join(__dirname, 'src/App'),
	devtool: debug ? 'inline-sourcemap' : null,
	entry: {
		fed: './fed.js',
		client: './client.js',
		server: './server.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, 'src/app'),
		filename: '[name].min.js'
	},
	externals: {
		react: 'React'
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
	]
};