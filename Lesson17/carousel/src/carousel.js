console.log('Hello');

class carousel {
    constructor() {
        this.btnLeft = document.createElement('button');
        this.btnRight = document.createElement('button');
        this.main = document.getElementById('main');
        this.imgDiv = document.createElement('div');
        this.arrImgs = ['01', '02', '03', '04', '05', '06'];
        this.imgCounter = 0;
        this.start = 0;
        this.coordinats = -20;
    }
    appChilds() {
        this.main.appendChild(this.imgDiv);
        this.imgDiv.style.transform = `translate3d(${this.coordinats}%, 0, 0)`;
        this.main.appendChild(this.btnLeft);
        this.btnLeft.textContent = "<=";
        this.main.appendChild(this.btnRight);
        this.btnRight.textContent = "=>";
        document.body.appendChild(this.main);
        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div');
            div.className = 'images';
            this.imgDiv.appendChild(div);
        }
        this.btnLeft.onclick = () => {
            this.start--;
            this.imgCounter = this.start;
            this.leftRigthShift(1);
        }
        this.btnRight.onclick = () => {
            this.start++;
            this.imgCounter = this.start;
            this.leftRigthShift(-1);
        }
    }
    leftRigthShift(x) {
        let shift = setInterval(() => {
            if (x > 0) {
                if (this.coordinats >= 0) {
                    this.coordinats = -21;
                    clearInterval(shift);
                    this.imgAdder();
                }
            }
            else {
                if (this.coordinats <= -40) {
                    this.coordinats = -19
                    clearInterval(shift);
                    this.imgAdder();
                }
            }
            this.imgDiv.style.transform = `translate3d(${this.coordinats += x}%, 0, 0)`;
        }, 10)
    }
    currentImg() {
        if (this.start < 0) this.start = this.arrImgs.length - 1;
        return this.arrImgs[(++this.imgCounter) % this.arrImgs.length];
    }
    imgAdder() {
        let imgDivs = document.getElementsByClassName('images');
        console.log(imgDivs, imgDivs.length);
        for (let i = 0; i < imgDivs.length; i++) {
            imgDivs[i].innerHTML = '<img src = "./JSEasyCodeHomeWorks/Lesson17/carousel/' + this.currentImg()
                + '.jpg">'; 
        }
    }
}


let imgCarousel = new carousel();
imgCarousel.appChilds();
imgCarousel.imgAdder();