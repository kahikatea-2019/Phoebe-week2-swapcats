const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('homepage')
})

// router.get('/trades', (req, res) => {
//   res.render('/homepage')
// })

// router.get('/trades', (req, res) => {
//   res.render('main')
// })

router.get('/shoes', (req, res) => {
  //This function renders shoes with a list of shoes products
  db.getShoes()
    .then(shoes => {
      res.render('shoes', shoes)
    })
})

router.get('/electronics', (req, res) => {
  //This function renders electronics with a list of shoes products
  db.getPhoneUsers()
    .first()
    .then(phones => {
      res.render('electronics', phones)
    })
})

router.get('/random', (req, res) => {
  db.getBags()
    .then(bags => {
      res.render('random', bags)
    })
})

// // Add New Product

// router.get('/trades/newproduct', (req, res) => {
//   res.render('newproduct')
// })

// router.post('/trades/newproduct/submit', (req, res) => {
//   const newProduct = {
//     product_category: req.body.product_category,
//     product_description: req.body.product_description,
//     img_url: req.body.img_url,
//     user_id: req.body.user_id
//   }

//   db.addProduct(newProduct)

//     .then(() => res.redirect('/trades'))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// // Add New User
// router.get('/trades/newuser', (req, res) => {
//   res.render('newuser')
// })

// router.post('/trades/newuser/submit', (req, res) => {
//   const newUser = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   }

//   db.addProduct(newUser)
//     .then(() => res.redirect('/trades'))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// // Edit User

// router.get('/users/:id', (req, res) => {
//   const id = req.params.id
//   db.getUser(id)
//     .then(user => res.render('editUser', user))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// router.post('/users/submit/:id', (req, res) => {
//   const id = req.params.id
//   const newProfile = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   }

//   db.editUser(newProfile, id)
//     .then(() => res.redirect('/users'))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// // Edit Product
// router.get('/products/:id', (req, res) => {
//   const id = req.params.id
//   db.getProduct(id)
//     .then(product => res.render('editProduct', product))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })
// router.post('/products/submit/:id', (req, res) => {
//   const id = req.params.id
//   const newProductInfo = {
//     product_category: req.body.product_category,
//     product_description: req.body.product_description,
//     img_url: req.body.img_url,
//     user_id: req.body.user_id
//   }
//   db.editUser(newProductInfo, id)
//     .then(() => res.redirect('/trades'))
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
