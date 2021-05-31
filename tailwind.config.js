const config = () => {
	const { OLIMP_VIEW } = process.env;
	return {
		presets: [
			require('./presets/common'),
			require(`./presets/${OLIMP_VIEW}`),
		],
	};
};

module.exports = config();