const production = process.env.NODE_ENV === 'production';
let config = {
	name: 'board-game-webapp',
};

if (production) {
 	config.lassoConfig = {
		urlPrefix: '/board-game'
	};
}

module.exports = require('marko-starter').projectConfig(config);
