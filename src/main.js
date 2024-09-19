import Phaser from "phaser";

import scenes from "./scenes/scenes";

const config = {
  type: Phaser.AUTO,
  width: 400, //mengatur lebar(width) dan tinggi(height)
  height: 620,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }, //mengatur besar gaya gravitasi
    },
  },
  scene: [scenes],
  scale: { 
    mode: Phaser.Scale.FIT, 
    autoCenter: Phaser.Scale.CENTER_BOTH,
  } //scene apa yang ditampilkan
};

export default new Phaser.Game(config);
