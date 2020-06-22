'use strict';

exports.up = (knex, Promise) => {

    return knex.schema.createTable('user', (table) => {

        table.increments('id').primary();
        table.string('Name').notNullable();
        table.string('Email').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
};