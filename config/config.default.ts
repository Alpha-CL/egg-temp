import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
	
	/** custom config zone start **/
	
	config.redis = {
		client: {
			host: '47.109.23.107',
			port: 6379,
			password: 'Liang1992@12',
			db: 0,
		},
		agent: true
	};
	
	config.mysql = {
		client: {
			host: '47.109.23.107',
			port: '3306',
			user: 'root',
			password: 'Liang1992@12',
			database: 'dev',
		},
	};
	
	config.sequelize = {
		dialect: 'mysql',
		host: '47.109.23.107',
		port: 3306,
		username: 'root',
		password: 'Liang1992@12',
		database: 'dev',
	};
	
	config.cors = {
		// origin: '*',
		credentials: true,
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
	};
	
	config.security = {
		domainWhiteList: [
			'localhost:8080',
		],
		csrf: {
			enable: false,
		},
	};
	
	config.cache = {
		default: 'memory',
		stores: {
			memory: {
				driver: 'memory',
				max: 100,
				ttl: 0,
			},
		},
	};
	
	config.jwt = {
		secret: "123456"
	};
	
	config.passportLocal = {
		// usernameField: 'username',
		// passwordField: 'password',
	};
	
	exports.validate = {
		// convert: false,
		// validateRoot: false,
	},
	
	
	/** custom config zone end **/

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1664417842037_630';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
