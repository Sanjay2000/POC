const userDetails = require('../models/user_details')
const Joi = require('@hapi/joi');

const internals = {};
internals.userDetails = Joi.object({
    FatherName: userDetails.field('FatherName'),
    MotherName: userDetails.field('MotherName'),
    MobileNo: userDetails.field('MobileNo'),
    Address: userDetails.field('Address'),
    City: userDetails.field('City'),
    State: userDetails.field('State'),
    Pin_Code: userDetails.field('Pin_Code'),
})


module.exports = [

    {
        method: 'POST',
        path: '/details',
        options: {
            validate: {
                payload: internals.userDetails
            },
            handler: async (request) => {
                const { userDetails } = request.services();
                const data = await userDetails.create(request.payload);
                return { data: data };
            },

        },

    },

]