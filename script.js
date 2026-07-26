// ===============================
// เปลี่ยนหน้าแบบ Fade
// ===============================
function go(url) {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = url;
    }, 700);
}

// ปุ่มหน้าแรก
function startJourney() {
    go("gift.html");
}

// ===============================
// หน้า Gift
// ===============================
const gift = document.getElementById("giftBox");

if (gift) {
    gift.addEventListener("click", () => {

        gift.classList.add("open");

        setTimeout(() => {
            go("letter.html");
        }, 1200);

    });
}

// ===============================
// หน้า Letter
// ===============================
const typing = document.getElementById("typing");

if (typing) {

    const text = `ถึงไหม 💖

ตั้งแต่วันจันทร์ที่ 21 กรกฎาคม 2569

ทุกครั้งที่ได้คุยกับเธอ

มันทำให้วันธรรมดา ๆ

กลายเป็นวันที่พิเศษเสมอ

เว็บนี้อาจไม่ได้สมบูรณ์แบบ

แต่มันเป็นสิ่งที่เราตั้งใจทำ

หวังว่าเธอจะยิ้มนะ 😊❤️`;

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 50);

        } else {

            const btn = document.getElementById("nextBtn");

            if (btn) {

                btn.style.display = "block";

                btn.onclick = () => go("star.html");

            }

        }

    }

    typeWriter();

}

// ===============================
// ดาว
// ===============================
const sky = document.getElementById("sky");

if (sky) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.width = "2px";

        star.style.height = "2px";

        star.style.animationDelay = Math.random() * 2 + "s";

        sky.appendChild(star);

    }

}

// ===============================
// เพลง
// ===============================
const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.onclick = () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = "🔊";

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵";

        }

    };

}

// ===============================
// หัวใจตามเมาส์
// ===============================
document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.className = "mouse-heart";

    heart.innerHTML = "💖";

    heart.style.left = e.pageX + "px";

    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 800);

});