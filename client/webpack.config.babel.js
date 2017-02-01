import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src',
	output: {
		path: __dirname + '/dest',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader' },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		historyApiFallback: {
			index: 'index.html'
		}
	}
}