import SceneA from './SceneA.js' 

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 800,
            height: 600
        },
        max: {
            width: 800,
            height: 600
        }
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    input: {
        keyboard: {
            target: window
        },
        mouse: {
            target: null,
            capture: false
        },
        activePointers: 1,
        touch: {
            target: null,
            capture: false
        },
        smoothFactor: 0,
        gamepad: false,       
        windowEvents: true,
    },
    disableContextMenu: true,
    scene: [SceneA],
};

var game = new Phaser.Game(config);
