import Experience from '../Experience.js'
import Button from './Button.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Headphone from './Headphone.js'
import Room from './Room.js'

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
          this.button = new Button()
          this.environment = new Environment()
        })
    }
}
