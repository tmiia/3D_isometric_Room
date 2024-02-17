import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Headphone from './Headphone.js'
import Room from './Room.js'
import Window from './Window.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        console.log(this.experience)

        this.resources.on('ready', ()=> {
          // Setup
          this.floor = new Floor()
          this.room = new Room()
          this.headphone = new Headphone()
          this.window = new Window()
          this.environment = new Environment()
        })
    }
}
