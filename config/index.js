module.exports = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8080,
	ip: process.env.IP || '0.0.0.0',
	seedDB: process.env.SEED_DB === "true" ? true : false,
	mongo: {
		uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/example-dev',
		options: {
			server: {
				auto_reconnect: true,
				socketOptions: {
					keepAlive: 1
				}
			},
			db: {
				safe: true
			}
		}
	},

	getUrl: function(){
	return   "http://" +this.ip + ":" + this.port
	}
};