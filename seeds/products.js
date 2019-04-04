exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
    // Inserts seed entries
      return knex('products').insert([
        { id: 1, product_category: 'shoe', product_description: "Eve's shoes", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10001 },
        { id: 2, product_category: 'shoe', product_description: "Azaan's shoes", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10002 },
        { id: 3, product_category: 'shoe', product_description: "Philipl's shoes", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10003 },
        { id: 4, product_category: 'shoe', product_description: "Dani's shoes", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10004 },
        { id: 5, product_category: 'shoe', product_description: "Ete's shoes", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10005 },
        { id: 6, product_category: 'bag', product_description: "Eve's bag", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10001 },
        { id: 7, product_category: 'bag', product_description: "Azaan's bag", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10002 },
        { id: 8, product_category: 'bag', product_description: "Philipl's bag", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10003 },
        { id: 9, product_category: 'bag', product_description: "Dani's bag", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10004 },
        { id: 10, product_category: 'bag', product_description: "Ete's bag", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10005 },
        { id: 11, product_category: 'phone', product_description: "Eve's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10001 },
        { id: 12, product_category: 'phone', product_description: "Azaan's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10002 },
        { id: 13, product_category: 'phone', product_description: "Philipl's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10003 },
        { id: 14, product_category: 'phone', product_description: "Dani's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10004 },
        { id: 15, product_category: 'phone', product_description: "Ete's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10005 }
      ])
    })
}
