'use strict';

const Schmervice = require('schmervice');

module.exports = class UserDetails extends Schmervice.Service {

    async create(details) {

        const { userDetails } = this.server.models();
        return await userDetails.query().insertGraph(details);
    }



};