import { TILE_SIZE } from './constants'

import { GameObject } from "./gameObject";
import { Game } from './game';
import { UP, DOWN, LEFT, RIGHT } from './constants';
import { Input } from './input';

export class Hero extends GameObject {
  speed: number
  maxFrame: number
  moving: boolean

  constructor({  game, 
    sprite = { x: 0, y: 0, width: TILE_SIZE, height: TILE_SIZE, image: null }, 
    position = { x: 0, y: 0 }, 
    scale = 1
   } : {
    game: Game,
    sprite: any,
    position: any,
    scale: number
  }) {
    super({ game, sprite, position, scale });
    this.speed = 2
    this.maxFrame = 8;
    this.moving = false
  }

  update() {
    let nextX = this.destinationPosition.x;
    let nextY = this.destinationPosition.y;

    const distance = this.moveTowards(this.destinationPosition, this.speed);
    const arrived = distance <= this.speed;

    if(arrived) {
      if (this.game.input.lastKey === UP) {
        nextY -= TILE_SIZE;
        this.sprite.y = 8;
      } else if (this.game.input.lastKey === DOWN) {
        nextY += TILE_SIZE;
        this.sprite.y = 10;
      } else if (this.game.input.lastKey === LEFT) {
        nextX -= TILE_SIZE;
        this.sprite.y = 9;
      } else if (this.game.input.lastKey === RIGHT) {
        nextX += TILE_SIZE;
        this.sprite.y = 11;
      }
      this.destinationPosition.x = nextX
      this.destinationPosition.y = nextY
    }

    if(this.game.input.keys.length > 0 || !arrived) {
      this.moving = true;
    } else {
      this.moving = false;
    }

    if( this.game.eventUpdate && this.moving) {
      this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0
    } else if(!this.moving) {
      this.sprite.x = 0
    }
  }

}