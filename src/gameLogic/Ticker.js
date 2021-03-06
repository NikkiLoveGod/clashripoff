export default class Ticker {
  constructor (callback) {
    this.callback = callback
  }

  start () {
    this.handle = setInterval(this.callback, 1000 / 60)
  }

  stop () {
    clearInterval(this.handle)
  }
}
