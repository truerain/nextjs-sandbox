import { Input } from './input';
import { Hero } from './hero';
import { World } from './world';
import { TILE_SIZE } from './constants';


export class Game {
  heroImage: HTMLImageElement
  world: World
  hero: Hero
  input: Input
  eventUpdate: boolean
  eventTimer: number
  eventInterval: number


  constructor() {
    this.heroImage = new Image(),
    this.heroImage.src = "/images/hero1.png";

    this.world = new World()
    this.hero = new Hero({
      game: this,
      sprite: { x: 0, y: 11, width: 64, height: 64, image: this.heroImage },
      position: { x: 1*TILE_SIZE, y: 5 * TILE_SIZE },
      scale: 1,
    })
    this.input = new Input()

    this.eventUpdate = false;
    this.eventTimer = 0
    this.eventInterval = 200
  }

  render(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.hero.update();
    this.world.drawBackground(ctx)
    this.world.drawGrid(ctx)
    this.hero.draw(ctx)
    this.world.drawForeground(ctx)

    if(this.eventTimer < this.eventInterval) {
      this.eventTimer += deltaTime
      this.eventUpdate = false
    } else {
      this.eventTimer = 0
      this.eventUpdate = true
    }
  }
}
