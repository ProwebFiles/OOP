// parallax effect start

class Parallax {
    constructor(obj) {
        this.clouds = document.querySelectorAll(obj.clouds);
        this.extraEl = document.querySelector(obj.extraEl);
        this.background = document.querySelector(obj.background);

        window.addEventListener("scroll", () => { this.moveElements() });
    }

    moveElements() {
        this.clouds.forEach(clouds => {
            let speed = clouds.getAttribute("data-speed");
            clouds.style.transform = `translateX(${window.scrollY * speed}px)`;
        })

        this.extraEl.style.transform = `translateX(${window.scrollY * 0.9}px)`;
        this.background.style.objectPosition = `0 ${window.scrollY / 10}%`
    }
}

const parallax = new Parallax({
    clouds: ".header__cloud",
    extraEl: ".header__boat",
    background: ".header__fantasy",
});

// parallax effect end

// run string start

class Text {
    constructor(obj) {
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        this.str();
    }

    str(x = 0) {
        this.text.innerHTML += this.fullText[x];
        x++;

        if (x < this.fullText.length) {
            setTimeout(() => {
                this.str(x);
            }, 200)
        }
    }
}

const text = new Text({
    text: ".header__title"
});

// run string end

// parallax move start

class ParallaxMove {
    constructor(obj) {
        this.moveEl = document.querySelectorAll(obj.moveEl);
        window.addEventListener("mousemove", (e) => {
            this.moveItems(e);
        })
    }

    moveItems(e) {
        this.moveEl.forEach(items => {
            const speed = items.getAttribute("data-speed");
            const X = (window.innerWidth - e.pageX * speed) / 50;
            const Y = (window.innerWidth - e.pageY * speed) / 100;

            items.style.transform = `translate(${X}px, ${Y}px)`;
        });
    }
}

const parallaxMove = new ParallaxMove({
    moveEl: ".parallax__ball",
});

// parallax move end

// timer start

class Timer {
    constructor(obj) {
        this.timerNums = document.querySelectorAll(obj.timerNums);
        this.timerSection = document.querySelector(obj.timerSection);
        this.state = true;

        window.addEventListener("scroll", () => { this.scrollTimer() })
    }

    scrollTimer() {
        if (this.state) {
            if (window.scrollY >= this.timerSection.offsetTop - this.timerSection.offsetHeight * 2) {
                this.timerSet();
                this.state = false;
            }
        }
    }

    timerSet() {
        this.timerNums.forEach(nums => {
            const count = +nums.getAttribute("data-num");
            nums.innerHTML = 0;

            function timer(k = 0) {
                nums.innerHTML = k;
                k++;

                if (k <= count) {
                    setTimeout(() => {
                        timer(k);
                    }, 5);
                }
            }
            timer();
        });
    }
}

const timer = new Timer({
    timerNums: ".timer__num",
    timerSection: ".timer"
});

// timer end

// Bubble animation start

class Bubble {
    constructor(obj) {
        this.bubble = document.querySelectorAll(obj.bubble);

        this.bubble.forEach(bubbles => {
            bubbles.addEventListener("mousemove", (e) => {
                this.bubbleShow(e, bubbles);
            })
        });
    }

    bubbleShow(e, item) {
        const X = e.pageX - item.offsetLeft;
        const Y = e.pageY - item.offsetTop;

        let span = item.querySelector("span");

        span.style.left = `${X}px`;
        span.style.top = `${Y}px`;
    }
}

const bubble = new Bubble({
    bubble: ".timer__btn"
});

// Bubble animation end

// 3D card animation start

class Rotate3D {
    constructor(obj) {
        this.card = document.querySelectorAll(obj.card);
        this.card.forEach(cards => {
            cards.addEventListener("mousemove", (e) => { this.rotate(e, cards) });
            cards.addEventListener("mouseout", (e) => { this.rotateNone(cards) });
        });
    }

    rotate(e, item) {
        const cardItem = item.querySelector(".card__item");
        const halfHeight = cardItem.offsetHeight / 2;
        cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY) / 10}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`;
    }

    rotateNone(item) {
        const cardItem = item.querySelector(".card__item");
        cardItem.style.transform = 'rotate(0)';
    }
}

const rotate3D = new Rotate3D({
    card: ".card",
});

// 3D card animation end

// scroll animation start

class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);

        window.addEventListener("scroll", () => {
            this.fadeRightAnim(this.section, 2);
            this.fadeRightAnim(this.section, 2);
        });
    }

    fadeRightAnim(section, coordinate) {
        const fadeRight = section.querySelectorAll(".fade-right");

        fadeRight.forEach(fadeRights => {
            const speed = fadeRights.getAttribute("data-speed")
            fadeRights.style.transition = speed + "ms"
            if (window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
                fadeRights.classList.add("active")
            } else {
                fadeRights.classList.remove("active")
            }
        });
    }
}

const scroll = new Scroll({
    section: ".scroll",
});

const scroll2 = new Scroll({
    section: ".about",
});

// scroll animation end