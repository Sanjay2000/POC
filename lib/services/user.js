'use strict';

const Schmervice = require('schmervice');       

module.exports = class User extends Schmervice.Service {

    async create(details) {

        const { user } = this.server.models();
        return await user.query().insertGraph(details);
    }

    async findAll(txn) {
        const { user } = this.server.models();
        return await user.query(txn).withGraphFetched({
            user:true
        });

    }



};
