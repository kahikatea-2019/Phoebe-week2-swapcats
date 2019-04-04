exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users_id')
    table.string('product_category')
    table.string('product_description')
    table.string('img_url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products')
}
