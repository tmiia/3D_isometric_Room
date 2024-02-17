import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import EventEmitter from './Utils/EventEmitter.js'

export default class Camera extends EventEmitter{
  constructor(){
    super()
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
    // this.setOrbitControls()
  }

  setInstance(){
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.instance.position.set(4.5, 2.5, 3.5)
    this.instance.lookAt(0,1.5,0)
    this.scene.add(this.instance)
  }

  setOrbitControls(){
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }

  resize(){
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update(){
    // this.controls.update()
    this.trigger('cameraMove')
  }
}
