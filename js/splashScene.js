/* global Phaser */

class SplashScene extends Phaser.Scene{
    constructor(){
        super({key: 'splashScene'})
        this.splashSceneBackgroundImage = null
    }

    init (data){
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload(){
        console.log('Splash scene')
        this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
    }

    create(data){
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }

    update (time, delta){
        if (time > 3000){
            this.scene.switch('titleScene')
        }
    }
}

export default SplashScene