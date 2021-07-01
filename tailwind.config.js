const getView = (argv) => {
	return argv.map(arg => arg.split('=')).find(arg => arg[0] === 'OLIMP_VIEW')[1];
};

const config = () => {
	const OLIMP_VIEW = getView(process.argv);
	return {
		presets: [
			require('./presets/common'),
			require(`./presets/${OLIMP_VIEW}`),
		],
	};
};

module.exports = config();