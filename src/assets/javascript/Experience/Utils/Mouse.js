import * as THREE from 'three'
import gsap from 'gsap';
import Experience from "../Experience";
import EventEmitter from './EventEmitter'

export default class Mouse extends EventEmitter{
  constructor(){
    super()

    // Setup
    this.mousePos = new THREE.Vector2()
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.raycaster = this.experience.raycaster
    this.currentIntersect = this.raycaster.currentIntersect

    window.addEventListener('mousemove', (event) =>
    {
        this.mousePos.x = event.clientX / this.sizes.width * 2 - 1
        this.mousePos.y = - (event.clientY / this.sizes.height) * 2 + 1
    })

    window.addEventListener('click', () =>
    {
      if(this.raycaster.currentIntersect){
            switch(currentIntersect.object.name)
            {
                case headphoneModel.children[0].name:
                  openMusicOverlay()
                break
            }
        }
    })
  }

  openMusicOverlay() {
    gsap.to(camera.position, {z: -1.1, x: 1.9, y: 2.4, duration: 1.3, ease: "circ.out"});
    overlay.classList.toggle("active")
  }
}
