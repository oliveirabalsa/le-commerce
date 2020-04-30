
exports.up = function(knex) {
    return knex.schema.createTable('categories', function (table) {
        table.increments('categorie_id').primary();
        table.string('categorie_name');
    
      });
};

exports.down = function(knex) {
    return knex.scheema.dropTable('categories');
  
};
