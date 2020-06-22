'use strict';
const { Model } = require('./helpers');
const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class user extends Schwifty.Model {
    static get tableName() {
        return 'user';
    }
    static get joiSchema() {
        return Joi.object({
            id: Joi.number().integer(),
            Name: Joi.string(),
            Email: Joi.string()
        });
    }
    static get relationMappings() {
        const userDetails = require("./user_details")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: userDetails,
                join: {
                    from: 'user.id',
                    to: 'user_details.id',
                }
            },
        }
    }
};