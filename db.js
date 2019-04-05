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
  editProduct: editProduct,
  getPhoneUsers: getPhoneUsers,
  getShoesUsers: getShoesUsers,
  getBagsUsers: getBagsUsers
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
    .where('product_category', 'shoe')
    .select()
}

function getBags (db = connection) {
  return db('products')
    .where('product_category', 'bags')
    .select()
}

function getPhones (db = connection) {
  return db('products')
    .where('product_category', 'phone')
    .select()
}

function getPhoneUsers (id, db = connection) {
  // Combines electronics and user
  return db('products')
    .join('users', 'users.id', 'products.user_id')
    .where({product_category: 'phone'})
}

function getShoesUsers (id, db = connection) {
  // Combines electronics and user
  return db('products')
    .join('users', 'users.id', 'products.user_id')
    .where({product_category: 'shoe'})
}

function getBagsUsers (id, db = connection) {
  // Combines electronics and user
  return db('products')
    .join('users', 'users.id', 'products.user_id')
    .where({product_category: 'bag'})
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
