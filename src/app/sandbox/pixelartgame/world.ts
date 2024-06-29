import { TILE_SIZE, COLS, ROWS } from './constants'

export class World {
  level1: any;
  
  constructor() {
    this.level1 = {
      waterLayer: [],
      groundLayer: [],
      backgroundImage: new Image(),
      foregroundImage: new Image(),
    };
    this.level1.backgroundImage.src = "/images/backgroundLevel1.png"
    this.level1.foregroundImage.src = "/images/foregroundLevel1.png"
  }

  drawBackground(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.level1.backgroundImage, 0, 0)
  }

  drawForeground(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.level1.foregroundImage, 0, 0)
  }

  drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'black'
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        ctx.strokeRect(col * TILE_SIZE, 
                       row * TILE_SIZE, 
                       TILE_SIZE, 
                       TILE_SIZE)
      }
    }
  }

}