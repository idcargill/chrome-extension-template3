// const { default: ESLintWebpackPlugin } = require('eslint-webpack-plugin');
// const path = require('path');

module.exports = {
	entry: {
		background: ['./src/background.js'],
		popup: ['./src/popup.js', './src/popup.css'],
		options: ['./src/options.js'],
	},
	output: {
		filename: '[name].js',
		// path: path.resolve(__dirname, 'dist'),
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				loader: 'css-loader',
				options: {
					import: true,
				},
			},
		],
	},
};
