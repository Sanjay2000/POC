'use strict';

const Bounce = require('@hapi/bounce');
const Schmervice = require('schmervice');
const { UniqueViolationError } = require('objection');


module.exports = class Riddles extends Schmervice.Service {

    async create(details) {

        const { Riddles } = this.server.models();
        return await Riddles.query().insertGraph(details);
    }

    async findById(id) {

        const { Riddles } = this.server.models();
        return await Riddles.query().throwIfNotFound().findById(id);

    }

    async findAll(txn) {
        const { Riddles } = this.server.models();
        return await Riddles.query(txn);

    }

    async riddleUpdate(id, details, ) {
        const { Riddles } = this.server.models();
        const updateRiddles = await Riddles.query()
            .update(details)
            .where({ id: id }); 
        return updateRiddles;
    }

    async delete(id) {
        const { Riddles} = this.server.models();
        await Riddles.query().delete().where({ id: id });
        await Riddles.query().delete().findById(id);
      }





}
