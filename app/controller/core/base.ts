const { Controller } = require('egg');

enum IResultCode {
	SUCCESS = 200,
	ERROR = 500,
	NOTFOUND = 404,
}

enum IResultMessage {
	SUCCESS = 'success',
	ERROR = 'error',
	NOTFOUND = 'not found',
}

class BaseController extends Controller {
	
	success(data) {
		this.ctx.body = {
			code: IResultCode.SUCCESS,
			message: IResultMessage.SUCCESS,
			data,
		};
	}
	
	error(message: string = IResultMessage.ERROR) {
		this.ctx.body = {
			code: IResultCode.ERROR,
			message: message,
			data: null,
		};
	}
	
	notFound(message: string = IResultMessage.NOTFOUND) {
		this.ctx.throw(404, message);
		this.ctx.body = {
			code: IResultCode.NOTFOUND,
			message: message,
			data: null,
		};
	}
}

export default BaseController;
