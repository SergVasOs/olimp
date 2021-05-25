const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const generateHtmlPlugins = (templateDir) => {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.filter(item => {
		const parts = item.split('.');
		const extension = parts[1];

		return extension === 'pug';
	}).map(item => {
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];

		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
		})
	})
};

const config = (env) => {
	const {view} = env;
	const htmlPlugins = generateHtmlPlugins(`./src/${view}/page`);

	return {
		entry: {
			app: `./src/${view}/index.js`,
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'script.js',
		},
		devServer: {
			port: 5000,
			contentBase: path.join(__dirname, 'public'),
			inline: true,
		},
		target: 'web',
		module: {
			rules: [
				{
					test: /\.pug$/,
					use: [
						{
							loader: 'pug-loader',
							options: {
								root: path.resolve(__dirname, 'src'),
							},
						},
					],
				},
				{
					test: /.(jpg|jpeg|png|svg|ttf)$/,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader' },
					],
				},
			],
		},
		plugins: [
			...htmlPlugins,
			new MiniCssExtractPlugin({
				filename: 'style.css',
			}),
		],
	};
};

module.exports = config;