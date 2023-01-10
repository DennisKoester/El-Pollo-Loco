class ThrowableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('./img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }


    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            if (!world.character.otherDirection) {
                this.x += 15;
            }
            else {
                this.x -= 15;
            }
        }, 25);
    }
}