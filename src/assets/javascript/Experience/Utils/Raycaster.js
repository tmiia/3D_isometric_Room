import * as THREE from 'three'
import EventEmitter from './EventEmitter'
import Experience from "../Experience";
import Animation from "../Animation";

export default class Raycaster extends EventEmitter{
  constructor(){
    super()

    // Setup
    this.raycaster = new THREE.Raycaster();
    this.currentIntersect = null
    this.experience = new Experience()
    this.mouse = new THREE.Vector2()
    this.sizes = this.experience.sizes
    this.camera = this.experience.camera
    this.sceneItems = this.experience.resources.items
    this.resources = this.experience.resources
    this.animation = new Animation()

    this.resources.on('ready', ()=> {
      this.headphone = this.experience.world.headphone.model.children[0]
      this.button = this.experience.world.button.model.name
    })

    window.addEventListener('mousemove', (event) =>
    {
        this.mouse.x = event.clientX / this.sizes.width * 2 - 1
        this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1
    })

    window.addEventListener('click', ()=>{
      if(this.currentIntersect){
        console.log(this.currentIntersect.object.parent.name);
        console.log(this.button);
        switch(this.currentIntersect.object.parent.name){
          case this.headphone.children[0].name:
            this.animation.openMusicOverlay()
          break
          case this.button:
            this.animation.openMusicOverlay()
          break
        }
      }
    })
  }
}
