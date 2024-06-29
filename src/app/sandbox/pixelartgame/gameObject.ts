import { HALF_TILE, TILE_SIZE } from './constants'
import { Game } from './game'

export class GameObject {
  game: Game
  sprite: any
  position: any
  scale: number
  destinationPosition: {x: number, y: number}
  distanceToTravel: {x: number, y: number}
  width: number
  height: number

  constructor({ game, 
              sprite = { x: 0, y: 0, width: TILE_SIZE, height: TILE_SIZE, image: null }, 
              position = { x: 0, y: 0 }, 
              scale = 1
            } : {
              game: Game,
              sprite: any,
              position: any,
              scale: number
            }) 
  {
    this.game = game
    this.sprite = sprite
    this.position = position
    this.scale = scale

    this.destinationPosition = { x: this.position.x, y: this.position.y } 
    this.distanceToTravel = {x: 0, y: 0}

    this.width = this.sprite.width * this.scale;
    this.height = this.sprite.width * this.scale;
  }

  moveTowards(destinationPosition: {x: number, y: number}, speed: number) {
    this.distanceToTravel.x = destinationPosition.x - this.position.x;
    this.distanceToTravel.y = destinationPosition.y - this.position.y;

    //let distance = Math.sqrt(this.distanceToTravel.x**2 + this.distanceToTravel.y**2)
    let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y)

    if(distance <= speed) {
      // if close enough, snap to position
      this.position.x = destinationPosition.x;
      this.position.y = destinationPosition.y;
    } else {
      // else take a step towards destination
      const stepX = this.distanceToTravel.x / distance
      const stepY = this.distanceToTravel.y / distance
      this.position.x += stepX * speed;
      this.position.y += stepY * speed;

      // remaining distance
      this.distanceToTravel.x = destinationPosition.x - this.position.x;
      this.distanceToTravel.y = destinationPosition.y - this.position.y;
      distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y)
    }

    return distance;

  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(
      this.position.x,
      this.position.y,
      TILE_SIZE,
      TILE_SIZE,
    )
    ctx.strokeStyle = 'yellow'
    ctx.strokeRect(
      this.destinationPosition.x,
      this.destinationPosition.y,
      TILE_SIZE,
      TILE_SIZE,
    )
    ctx.drawImage(
      this.sprite.image,
      this.sprite.x * this.sprite.width,
      this.sprite.y * this.sprite.height,
      this.sprite.width,
      this.sprite.height,
      this.position.x + HALF_TILE - this.width / 2,
      this.position.y + TILE_SIZE - this.height,
      this.width,
      this.height,
    )
  }
}