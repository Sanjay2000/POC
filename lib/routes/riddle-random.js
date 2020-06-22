'use strict';

const Joi = require('@hapi/joi');


module.exports = [
    {
        method: 'POST',
        path: '/riddle',
        options: {
            validate: {
                payload: Joi.object({
                    slug: Joi.string().required(),
                    question: Joi.string().required(),
                    answer: Joi.string().required()
                })
            },
            handler: async (request) => {
                const { riddles } = request.services();
                const data = await riddles.create(request.payload);
                return { data: data };
            },

        },

    },

    {
        method: 'GET',
        path: '/riddle/{id}',
        options: {
            tags: ['api'],
            validate: {
                params: Joi.object({
                    id: Joi.number().integer()
                })
            },
            handler: async (request) => {
                const { riddles } = request.services();
                const { id } = request.params
                const riddle = await riddles.findById(id)
                return { data: riddle }
            },
        },
    },


    {
        method: 'GET',
        path: '/riddle',
        options: {
            tags: ['api'],
            handler: async (request) => {
                const { riddles } = request.services();

                const data = await riddles.findAll();
                return { data: data }
            },
        },

    },

    {
        method: 'PUT',
        path: '/riddle/{id}',
        options: {
            description: 'Update riddle details with the given ID.',
            tags: ['api'],
            validate: {
                params: Joi.object({
                    id: Joi.number().integer()
                }),
                payload: Joi.object({
                    slug: Joi.string(),
                    question: Joi.string(),
                    answer: Joi.string()
                })
            },
            handler: async (request) => {
                const { riddles } = request.services();
                const Riddle = await riddles.findById(request.params.id);
                await riddles.riddleUpdate(request.params.id, request.payload);
                return { data: Riddle };
            },
        },
    },

    {
        method: 'DELETE',
        path: '/riddle/{id}',
        options: {
            description: 'Delete the riddle with a given ID.',
            tags: ['api'],
            validate: {
                params: Joi.object({
                    id: Joi.number().integer()
                }),
            },
            handler: async (request) => {
                const { riddles } = request.services();
                await riddles.delete(request.params.id); // responce
                return { success: true };
            },
        },
    },

]
