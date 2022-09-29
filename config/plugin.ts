import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
	
	/** custom plugins zone start **/
	
	redis: {
		enable: true,
		package: 'egg-redis',
	},
	
	mysql: {
		enable: true,
		package: 'egg-mysql',
	},
	
	sequelize: {
		enable: true,
		package: 'egg-sequelize',
	},
	
	cors: {
		enable: true,
		package: 'egg-cors',
	},
	
	security: {
		enable: true,
		package: 'egg-security',
	},
	
	cache: {
		enable: true,
		package: 'egg-cache',
	},
	
	jwt: {
		enable: true,
		package: "egg-jwt"
	},
	
	session: {
		enable: true,
		package: 'egg-session',
	},
	
	validate: {
		enable: true,
		package: 'egg-validate',
	},
	
	/** custom plugins zone end **/
};

export default plugin;
