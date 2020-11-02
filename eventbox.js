const EventEmitter = require('events')

function empty() {
  const emitter = new EventEmitter()

  emitter.on('hi', () => {
    console.log('Ch0ooooooper!')
  })

  emitter.emit('hi')
}

function withArgs(names) {
  const emitter = new EventEmitter()
  
  emitter.on('newFellow', (name) => {
    console.log(`Here com's a new pirate ->> ${name}`)
  })

  names.forEach(
    (name) => emitter.emit('newFellow', name),
  )
}

module.exports = {
  empty,
  withArgs,
}