import Phaser from "phaser";
import gim from "../../public/image/gim.png";
export default class scenes extends Phaser.Scene {
  constructor() {
    super("scenes-starter-scene");
  }
  init() {}

  preload() {
    this.load.image("gambar", gim);
  }
  create() {
    var textConfig = { fontSize: "20px", color: "#ff0000", fontFamily: "Arial" };
    this.add.text(100,100, "CREATE YOUR GAME", textConfig);

    var plaer = this.add.image(200, 320, "gambar");
    plaer.setScale(0.2);
  }
  update(time) {}
}
