import gsap from 'gsap';
import EventEmitter from './Utils/EventEmitter'
import Experience from "./Experience";


export default class Animation extends EventEmitter{
  constructor(){
    super()
    this.experience = new Experience()
    this.camera = this.experience.camera.instance
    this.resources = this.experience.resources
  }

  openMusicOverlay() {
    this.onAnimation = true
    this.overlay = document.querySelector(".overlay")
    gsap.to(this.camera.position, {z: 0, x: 1.5, y: 1.6, duration: 1.3, ease: "circ.out"});
    this.overlay.classList.toggle("active")
    console.log(this.onAnimation);
  }
}
