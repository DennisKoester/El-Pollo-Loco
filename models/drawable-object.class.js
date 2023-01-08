class DrawableObject {
    x = 150;
    y = 230;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // document.getElementById('image') <img id="image>" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    
    /**
     * 
     * @param {array} arr ['img/image01.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

}