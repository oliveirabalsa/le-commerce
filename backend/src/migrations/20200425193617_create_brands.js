exports.up = function (knex) {
  return knex.schema.createTable('brands', function (table) {
    table.increments('brand_id').primary();
    table.string('brand_name');
  });
};

exports.down = function (knex) {};
