import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Button
{
    constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.camera = this.experience.camera

      this.resource = this.resources.items.buttonModel

      this.setModel()
    }

    setModel(){
        this.model = this.resource.scene
        this.model.position.set(1, 1.78, -0.80)
        this.model.rotation.y = - Math.PI * 0.25
        this.model.rotation.z = Math.PI * 2
        this.model.name = "button"
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
