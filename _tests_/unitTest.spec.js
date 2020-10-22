const HmacGen = require('./../server/helper.js');

test('it should confirm hash consistency', () => {
  expect(HmacGen('text')).toBe('text&Signature=48b5f0a1531f785ec6e3899dccc5f4d62ddf43b5acd09ffc41cd814b54562e73')
});