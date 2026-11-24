// ======================================
// NIAZI DAY
// COMPLETE JAVASCRIPT
// ======================================


// ELEMENTS

const enterButton = document.getElementById("enterUniverse");

const envelope = document.getElementById("envelope");
const openLetterButton = document.getElementById("openLetter");

const blowButton = document.getElementById("blowCandles");
const wishMessage = document.getElementById("wishMessage");

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

const starsBackground = document.getElementById("starsBackground");


// 1. CREATE FLOATING STARS

function createStars() {

    if (!starsBackground) return;

    for (let i = 0; i < 90; i++) {

        const star = document.createElement("span");

        star.className = "floating-star";

        star.style.position = "absolute";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.width = (1 + Math.random() * 3) + "px";
        star.style.height = star.style.width;

        star.style.borderRadius = "50%";
        star.style.background = "white";

        star.style.boxShadow = "0 0 10px white";

        star.style.animation =
            `twinkle ${2 + Math.random() * 4}s infinite alternate`;

        star.style.animationDelay =
            Math.random() * 4 + "s";

        starsBackground.appendChild(star);
    }

}

createStars();


// 2. ENTER THE UNIVERSE

if (enterButton) {

    enterButton.addEventListener("click", () => {

        document.getElementById("eyes").scrollIntoView({
            behavior: "smooth"
        });

        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {});
        }

    });

}


// 3. REAL ENVELOPE OPEN AND CLOSE

let letterIsOpen = false;
let letterIsAnimating = false;

if (envelope && openLetterButton) {

    openLetterButton.addEventListener("click", () => {

        if (letterIsAnimating) return;

        letterIsAnimating = true;

        if (!letterIsOpen) {

            // OPEN THE ENVELOPE

            envelope.classList.remove("closing");
            envelope.classList.add("open");

            letterIsOpen = true;

            openLetterButton.textContent =
                "♡ Close My Letter";

            openLetterButton.setAttribute(
                "aria-expanded",
                "true"
            );

            setTimeout(() => {
                letterIsAnimating = false;
            }, 1300);

        } else {

            // FIRST: PUT THE LETTER BACK INSIDE

            envelope.classList.add("closing");

            letterIsOpen = false;

            openLetterButton.textContent =
                "♡ Open My Letter";

            openLetterButton.setAttribute(
                "aria-expanded",
                "false"
            );

            // THEN: CLOSE THE ENVELOPE FLAP

            setTimeout(() => {

                envelope.classList.remove("open");
                envelope.classList.remove("closing");

                letterIsAnimating = false;

            }, 1100);

        }

    });

}


// 4. BLOW OUT THE CANDLES

let candlesBlown = false;

if (blowButton && wishMessage) {

    blowButton.addEventListener("click", () => {

        if (candlesBlown) return;

        candlesBlown = true;

        const flames = document.querySelectorAll(".flame");

        flames.forEach((flame, index) => {

            setTimeout(() => {

                flame.style.transition = "0.5s";
                flame.style.opacity = "0";
                flame.style.transform = "scale(0)";

            }, index * 350);

        });

        blowButton.textContent = "Wish Completed ♡";
        blowButton.disabled = true;

        setTimeout(() => {

            wishMessage.textContent =
                "May all your wishes come true ✨";

            wishMessage.style.animation =
                "appear 1s ease";

            createCelebration();

        }, 1400);

        setTimeout(() => {

document.getElementById("final").scrollIntoView({
                behavior: "smooth"
            });

        }, 4500);

    });

}


// 5. CELEBRATION

function createCelebration() {

    const colors = [
        "#f3a4d2",
        "#d5a5ff",
        "#ffffff",
        "#b58cff"
    ];

    for (let i = 0; i < 55; i++) {

        const particle = document.createElement("span");

        particle.className = "celebration-particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.boxShadow =
            "0 0 12px " + particle.style.background;

        particle.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        particle.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 6000);

    }

}


// 6. MUSIC CONTROL

if (musicButton && backgroundMusic) {

    musicButton.addEventListener("click", () => {

        if (backgroundMusic.paused) {

            backgroundMusic.play().catch(() => {
                alert("Please check your music file.");
            });

        } else {

            backgroundMusic.pause();

        }

    });

    backgroundMusic.addEventListener("play", () => {

        musicButton.classList.add("playing");
        musicButton.textContent = "❚❚";

    });

    backgroundMusic.addEventListener("pause", () => {

        musicButton.classList.remove("playing");
        musicButton.textContent = "♫";

    });

}


// 7. ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// 8. ANIMATION STYLES

const animationStyle = document.createElement("style");

animationStyle.textContent = `

@keyframes twinkle {

    from {
        opacity: .2;
        transform: scale(.6);
    }

    to {
        opacity: 1;
        transform: scale(1.5);
    }

}

`;

document.head.appendChild(animationStyle);


// 9. CONSOLE MESSAGE

console.log(
    "%c NIAZI DAY ♡ ",
    "background: #32164f; color: #f3a4d2; font-size: 22px; padding: 15px;"
);