import gsap from 'gsap';
import Experience from "./Experience";


export default class Animation{
  constructor(){
    this.experience = new Experience()
    this.camera = this.experience.camera.instance
    this.resources = this.experience.resources

    this.resources.on('ready', ()=> {
      this.button = this.experience.world.button.scene.children[4]
    })
  }

  openMusicOverlay() {
    this.onAnimation = true
    this.overlay = document.querySelector(".overlay")
    gsap.to(this.camera.position, {z: -1.1, x: 1.9, y: 2.4, duration: 1.3, ease: "circ.out"});
    this.overlay.classList.toggle("active")
    gsap.to(this.button.position, {x: 1.8, duration: 1.3, ease: "circ.out"});
    this.onAnimation = false
  }
}
