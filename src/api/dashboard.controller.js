const BaseController = require('./base.controller');

class DashboardController extends BaseController {

    constructor() {
        super();

        this.bindActions('index');
    }

    index(req, res, next) {
        return res.json(this.processResponse({name: "Gu"}))
    }

}

exports.controller = new DashboardController();