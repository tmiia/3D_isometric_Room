import EventEmitter from './EventEmitter'
import Experience from "../Experience";

export default class Time extends EventEmitter{
  constructor(){
    super()

    // Setup
    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.raycaster = this.experience.raycaster.raycaster
    this.mouse = this.experience.raycaster.mouse
    this.resources = this.experience.resources

    this.resources.on('ready', ()=> {
      this.headphone = this.experience.world.headphone.model.children[0]
    })

    window.requestAnimationFrame(() => {
        this.tick()
    })
  }

  tick(){
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    if(this.headphone){
      this.raycaster.setFromCamera(this.mouse, this.camera.instance)

      let intersects = this.raycaster.intersectObject(this.headphone)

        if(intersects.length)
        {
            this.experience.raycaster.currentIntersect = intersects[0]
            
        }
        else
        {
            this.experience.raycaster.currentIntersect = null
        }
    }

    this.trigger('tick')

    window.requestAnimationFrame(()=> {
      this.tick()
    })
  }
}
