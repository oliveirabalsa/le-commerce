exports.up = function (knex) {
    return knex.schema.createTable('produtos', function (table) {
      table.increments().primary();
      table.string('name').notNullable();
      table.decimal('value').notNullable();
      table.string('category').notNullable();
      table.decimal('id_category').notNullable();
      table.timestamp('createdAt').defaultTo( knex.fn.now() );
      table.timestamp('updatedAt');
  
    });
  };
  exports.down = function (knex) {
    return knex.scheema.dropTable('produtos');
  };
  