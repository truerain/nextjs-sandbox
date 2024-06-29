import {LEFT, RIGHT, UP, DOWN } from './constants'

export class Input {
  keys: string[];

  constructor() {
    this.keys= []

    window.addEventListener('keydown', e => {
      if (e.key === "ArrowUp" || e.key === "w") {
        this.keyPressed(UP);
      } else if (e.key === "ArrowDown" || e.key === "s") {
        this.keyPressed(DOWN);
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        this.keyPressed(LEFT);
      } else if (e.key === "ArrowRight" || e.key === "d") {
        this.keyPressed(RIGHT);
      }
    })

    window.addEventListener('keyup', e => {
      if (e.key === "ArrowUp" || e.key === "w") {
        this.keyReleased(UP)
      } else if (e.key === "ArrowDown" || e.key === "s") {
        this.keyReleased(DOWN)
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        this.keyReleased(LEFT)
      } else if (e.key === "ArrowRight" || e.key === "d") {
        this.keyReleased(RIGHT)
      }
    })
  }

  keyPressed(key: string) {
    if (this.keys.indexOf(key) === -1) {
      this.keys.unshift(key)
    }
    //console.log(key, this.keys)
  }

  keyReleased(key) {
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
    }
    //console.log(key, this.keys)
  }

  get lastKey() {
    return this.keys[0]
  }
}