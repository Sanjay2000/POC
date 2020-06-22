exports.up = (knex, Promise) => {

    return knex.schema.createTable('user_details', (table) => {

        table.increments('id').primary();
        table.string("FatherName").notNullable();
        table.string("MotherName").notNullable();
        table.string("MobileNo").notNullable();
        table.string("Address").notNullable();
        table.string("City").notNullable();
        table.string("State").notNullable();
        table.string("Pin_Code").notNullable();

    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user_details');
};  