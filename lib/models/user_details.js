'use strict';

const  {Model}  = require('./helpers');
const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class userDetails extends Schwifty.Model {

    static get tableName() {

        return 'user_details';
    }

    static get joiSchema() {
        return Joi.object({
            id: Joi.number().integer(),
            FatherName: Joi.string(),
            MotherName: Joi.string(),   
            MobileNo: Joi.string(),
            Address: Joi.string(),
            City: Joi.string(),
            State: Joi.string(),
            Pin_Code: Joi.string()

        });
    }
};