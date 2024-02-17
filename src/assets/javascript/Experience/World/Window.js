import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Window
{
    constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources

      this.resource = this.resources.items.windowModel

      this.setModel()
    }

    setModel(){
        this.model = this.resource.scene
        this.model.scale.set(0.6, 0.52, 0.5)
        this.model.position.set(0.8, 2.55, -1.8)
        this.model.rotation.x = 0.03;
        this.model.name = "window"
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
