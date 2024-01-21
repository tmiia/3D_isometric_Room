import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Resources from './Utils/Resources'
import sources from './sources'
import Raycaster from './Utils/Raycaster'
import Animation from './Animation'


let instance = null

export default class Experience{
  constructor(canvas){
    if(instance){
      return instance
    }

    instance = this
    // Global access
    window.experience = this

    // Options
    this.canvas = canvas

    // Setup
    this.sizes = new Sizes()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    this.raycaster = new Raycaster()
    this.time = new Time()

    // Sizes resize event
    this.sizes.on('resize', ()=>{
      this.resize()
    })

    // Time tick event
    this.time.on('tick', ()=>{
      this.update()
    })

    console.log('Here starts a great experience')
  }

  resize(){
    this.camera.resize()
    this.renderer.resize()
  }

  update(){
    this.camera.update()
    this.renderer.update()
  }
}
