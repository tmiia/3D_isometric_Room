import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Headphone
{
    constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources

      this.resource = this.resources.items.headphoneModel

      this.setModel()
    }

    setModel(){
        this.model = this.resource.scene
        this.model.position.set(1, 1.38, -0.80)
        this.model.name = "headphone"
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}
