exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
    // Inserts seed entries
      return knex('products').insert([
        { id: 1, product_category: 'shoe', product_description: "Eve's shoes", img_url: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Satin-Shattered-Backboard-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256', user_id: 10001 },
        { id: 2, product_category: 'shoe', product_description: "Azaan's shoes", img_url: 'https://www.withsneaker.com/wp-content/uploads/2018/07/Nike-Air-Yeezy-2-SP-Red-October.jpg', user_id: 10002 },
        { id: 3, product_category: 'shoe', product_description: "Philipl's shoes", img_url: 'https://stockx.imgix.net/Air-Jordan-3-Retro-International-Flight.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256', user_id: 10003 },
        { id: 4, product_category: 'shoe', product_description: "Dani's shoes", img_url: 'https://images.timberland.com/is/image/timberland/A1JLK601-HERO?$PDP-FULL-IMAGE$', user_id: 10004 },
        { id: 5, product_category: 'shoe', product_description: "Ete's shoes", img_url: 'https://images-na.ssl-images-amazon.com/images/I/81zkSHl9kDL._UX395_.jpg', user_id: 10005 },
        { id: 6, product_category: 'bag', product_description: "Eve's bag", img_url: 'https://cf.ltkcdn.net/handbags/images/std/223717-675x450-Woman-Carrying-Chanel-Handbag.jpg', user_id: 10001 },
        { id: 7, product_category: 'bag', product_description: "Azaan's bag", img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0ueNzVNvcdyJlYM6R0qqAehhXHMwv5BEXBSbvAp_7_AchaaAmA', user_id: 10002 },
        { id: 8, product_category: 'bag', product_description: "Philipl's bag", img_url: 'https://s4.sywcdn.net/getImage?url=https%3A%2F%2Fimages.nike.com%2Fis%2Fimage%2FDotCom%2F9A0018_001_A%3F%24AFI%24%26hei%3D1000%26wid%3D1000&t=Product&w=1000&h=1000&qlt=100&mrg=1&str=1&s=2554d4d35c284a79c3f71b17afddb013', user_id: 10003 },
        { id: 9, product_category: 'bag', product_description: "Dani's bag", img_url: 'https://poshbrazilian.com/wp-content/uploads/2015/12/Gucci-Pre-Fall-2016-Bag-Campaign-3.jpg', user_id: 10004 },
        { id: 10, product_category: 'bag', product_description: "Ete's bag", img_url: 'https://cdn.shopify.com/s/files/1/1812/1847/products/10230_0_0x2_009f6b86-dd55-4e2e-b35e-b081b6775d94_1024x1024.jpg?v=1527364100', user_id: 10005 },
        { id: 11, product_category: 'phone', product_description: "Eve's phone", img_url: 'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F847201%252F3a5c458f-5022-4ad1-b2d9-ceab8cf73a64.jpg%252Ffit-in__1440x0.jpg?signature=W2PMCqce3qoOreCQk4muODiJskQ=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com', user_id: 10001 },
        { id: 12, product_category: 'phone', product_description: "Azaan's phone", img_url: 'https://www.extremetech.com/wp-content/uploads/2016/09/ara-1.jpg', user_id: 10002 },
        { id: 13, product_category: 'phone', product_description: "Philipl's phone", img_url: 'https://icdn2.digitaltrends.com/image/apple-iphone-xs-review-5-640x640.jpg', user_id: 10003 },
        { id: 14, product_category: 'phone', product_description: "Dani's phone", img_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-silver-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795411708', user_id: 10004 },
        { id: 15, product_category: 'phone', product_description: "Ete's phone", img_url: 'http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg', user_id: 10005 }
      ])
    })
}
