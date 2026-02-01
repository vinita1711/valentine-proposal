document.addEventListener("DOMContentLoaded", () => {

    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const result = document.getElementById("result");
    const heartsContainer = document.querySelector(".hearts");
    const balloonsContainer = document.querySelector(".balloons");
    const song = document.getElementById("song");

    yesBtn.addEventListener("click", () => {
        result.innerHTML = "Yaaay! ❤️ I knew it 😍";
        song.play();

        setInterval(createHeart, 300);
        setInterval(createBalloon, 900);
    });

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.innerHTML = "🎈";
        balloon.style.left = Math.random() * 100 + "vw";
        balloonsContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000);
    }

});
