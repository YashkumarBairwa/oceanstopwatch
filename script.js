
<script>
const stars = document.querySelector(".stars");

for(let i = 0; i < 100; i++){
    let star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random()*100 + "%";
    star.style.animationDuration =
        (5 + Math.random()*15) + "s";

    stars.appendChild(star);
}

const bubbles = document.querySelector(".bubbles");

for(let i = 0; i < 40; i++){
    let bubble = document.createElement("div");
    bubble.className = "bubble";

    let size = 5 + Math.random()*20;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random()*100 + "%";
    bubble.style.animationDuration =
        (8 + Math.random()*12) + "s";

    bubbles.appendChild(bubble);
}
</script>