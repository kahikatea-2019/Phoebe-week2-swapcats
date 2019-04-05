const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getShoes: getShoes,
  getBags: getBags,
  getPhones: getPhones,
  addUser: addUser,
  addProduct: addProduct,
  editUser: editUser,
  editProduct: editProduct
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}
// Display pages
// function getShoes (db = connection) {
//   return db('tablename')
//     .where('product_category', 'shoes')
//     .select() //if .select(product_description)//just show the product description
// }

function getShoes (db = connection) {
  return db('products')
    .where('product_category', 'shoes')
    .select()
}

function getBags (db = connection) {
  return db('products')
    .where('product_category', 'bags')
    .select()
}

function getPhones (db = connection) {
  return db('products')
    .where('product_category', 'phones')
    .select()
}

// Add Page

function addUser (newUser, db = connection) {
  return db('users')
    .insert(newUser)
}

function addProduct (newProduct, db = connection) {
  return db('products')
    .insert(newProduct)
}

// Edit Page
function editUser (newProfile, id, db = connection) {
  return db('users')
    .where('id', id)
    .update(newProfile)
  // .update (newProfile)
  // .update ({users.name: newProfile.name, users.email: newProfile.email})
    .select()
}

function editProduct (newProductInfo, id, db = connection) {
  return db('users')
    .where('id', id)
    .update(newProductInfo)
  // .update (newProfile)
  // .update ({users.name: newProfile.name, users.email: newProfile.email})
    .select()
}
