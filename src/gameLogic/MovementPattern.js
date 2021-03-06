export default class MovementPattern {
  constructor (origin, destination) {
    this.origin = origin
    this.destination = destination
    this.speed = 0.01

    this.currentLocation = origin
  }

  getCurrentLocation () {
    return this.currentLocation
  }

  isAtDestination () {
    return this.getCurrentLocation() === this.getDestination()
  }

  step () {
    this.currentLocation = Math.round(this.determineNextStep() * 100) / 100
  }

  determineNextStep () {
    if (this.currentLocation === this.destination) {
      return this.destination
    } else if (Math.abs(this.currentLocation - this.destination) < this.speed) {
      return this.destination
    } else if (this.currentLocation < this.destination) {
      return this.currentLocation + this.speed
    } else {
      return this.currentLocation - this.speed
    }
  }

  getDestination () {
    return this.destination
  }
}
