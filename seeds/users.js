exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 10001, name: 'Eve', email: 'eve@example.org', password: 1 },
        { id: 10002, name: 'Azaan', email: 'azaan@example.org', password: 2 },
        { id: 10003, name: 'Philipl', email: 'philipl@example.org', password: 3 },
        { id: 10004, name: 'Dani', email: 'dani@example.org', password: 4 },
        { id: 10005, name: 'Ete', email: 'ete@example.org', password: 5 }
      ])
    })
}
