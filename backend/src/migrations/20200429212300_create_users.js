exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('password').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
