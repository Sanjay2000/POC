const Joi = require('@hapi/joi');


module.exports = [

    {
        method: 'POST',
        path: '/user',
        options: {
            validate: {
                payload: Joi.object({
                    Name: Joi.string().required(),
                    Email: Joi.string().required()
                })
            },
            handler: async (request) => {
                const { user } = request.services();
                const data = await user.create(request.payload);
                return { data: data };
            },
        },
    },
    
    {
        method: 'GET',
        path: '/UserDetails',
        options: {
            tags: ['api'],
            handler: async (request) => {
                const { user } = request.services();
                const data = await user.findAll();
                return { data: data }
            },
        },

    },

]