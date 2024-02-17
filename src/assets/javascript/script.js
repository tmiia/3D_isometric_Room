import Experience from './Experience/Experience'
import swiper from './Swiper/swiper'

const experience = new Experience(document.querySelector('canvas.webgl'))

window.addEventListener('load', ()=>{
  swiper.init()
})
