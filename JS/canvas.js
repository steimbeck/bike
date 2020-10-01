
class SignCanvas {
    
    constructor() { 
        this.sign = document.getElementById("canvas");
        this.ctx = this.sign.getContext('2d');
        this.ctx.strokeStyle = '#006400';
        this.ctx.lineWidth = 4;
        this.draw = false;
        this.mousePosition = {
            x: 0,
            y: 0
        };
        this.lastPosition = this.mousePosition;
        this.clearButton = document.getElementById("cleansign");
        this.sign.width = 220;
        this.sign.height = 200;
    }

    //Gestion des événements 
    moveSign() {
        var pen = this ;
        //Souris
        this.sign.addEventListener("mousedown",  (e) => {
            pen.draw = true;
            pen.lastPosition = pen.getMposition(e);
        });

        this.sign.addEventListener("mousemove", (e) => {
            pen.mousePosition = pen.getMposition(e);
            pen.signResult()
        });

        // this.canvas.addEventListener("mouseup", function (e) {
        //     pen.draw = false;
        // });
        document.addEventListener("mouseup", (e) => {
                pen.draw = false;
        }); 

        // Stop scrolling (touch)
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        });

        document.body.addEventListener("touchend", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        });

        document.body.addEventListener("touchmove", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        });


        // Touchpad
        this.sign.addEventListener("touchstart", function (e) {
           self.mousePosition = self.getTposition(e);
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            self.canvas.dispatchEvent(mouseEvent);
        });

        this.sign.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            self.canvas.dispatchEvent(mouseEvent);
        });

        this.sign.addEventListener("touchend", function (e) {
            var mouseEvent = new MouseEvent("mouseup", {});
            self.canvas.dispatchEvent(mouseEvent);
        });

 


        
  //Effacer la signature
        this.clearButton.addEventListener("click", (e) => {
            pen.clearsign()
        });
    }

    // Renvoie les coordonnées de la souris 
    getMposition(mouseEvent) {
        if (this.draw) {
            var oRect = this.sign.getBoundingClientRect();
            return {
                x: mouseEvent.clientX - oRect.left,
                y: mouseEvent.clientY - oRect.top
            };
        }
    }

  
    // Dessin du canvas
    signResult() {
        if (this.draw) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
            this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
            this.ctx.stroke();
            this.lastPosition = this.mousePosition;
        }
    };

    // Vide le dessin du canvas
    clearsign() {
        this.sign.width = this.sign.width;
        this.ctx.lineWidth = 3;
    }

}



let obj = new SignCanvas();
obj.moveSign();