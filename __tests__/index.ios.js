import "react-native"
import React from "react"
import Index from "../index.ios.js"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

// Allow unsued tree const until we have actual tests
/*eslint no-unused-vars: 0*/

import Unit from "../src/gameLogic/Unit"
import Player from "../src/gameLogic/Player"
import MovementPattern from "../src/gameLogic/MovementPattern"
import BoardState from "../src/gameLogic/BoardState"

describe("Unit", () => {
  it("can be created", () => {
    const unit = createUnit(0.1, 1.0)
    expect(unit.getLocation()).toEqual(0.1)
  })

  it("can advance forward", () => {
    const unit = createUnit(0.1, 1.0)
    unit.advance()
    expect(unit.getLocation()).toEqual(0.11)
  })

  it("can advance backward", () => {
    const unit = createUnit(1.0, 0.1)
    unit.advance()
    expect(unit.getLocation()).toEqual(0.99)
  })

  it("it dies when colliding with another unit", () => {

    const player = createUnit(0.50, 0.51)
    const enemy = createUnit(0.52, 0.51)

    const board = new BoardState()
    board.addUnit(player)
    board.addUnit(enemy)

    expect(player.isAlive()).toEqual(true)
    expect(enemy.isAlive()).toEqual(true)

    board.advanceUnits()
    board.killCollidedUnits()

    expect(player.isAlive()).toEqual(false)
    expect(enemy.isAlive()).toEqual(false)
  })
})

function createUnit(start, target) {
  const plr = new Player()
  const ptrn = new MovementPattern(start, target)
  return new Unit(plr, ptrn)
}
