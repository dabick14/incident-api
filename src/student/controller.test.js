const controller = require('./controller')

test('the get all incidents should return object', () => {
  expect(typeof controller.getIncidents()).toBe('object')
})

test('the insert data function should return an object', () => {
  expect(
    typeof controller.insertData(
      1,
      'There was a fire',
      'Accra',
      'Ghana',
      '{"bomb":"bomb"}'
    )
  ).toBe('object')
})
