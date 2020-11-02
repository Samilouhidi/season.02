const { empty, withArgs } = require('./eventbox')
const { duplicate, transform } = require('./streambox')

console.log('----- Eventbox')
// eventbox
empty()
withArgs([
  'Luffy',
  'Zoro',
  'Usopp',
  'Robin',
  'Nami',
  'Sanji',
  'Ch0pper',
])

console.log('----- Streambox')
// streambox
duplicate('main.js')
transform(
  'eventbox.js', // filename
  /[a-z]/g,      // re ( RegExp -> Regular expression )
  (letter) => letter.toUpperCase(), // fn -> function
)