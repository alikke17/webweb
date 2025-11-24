setInterval(() => {
    const snow = document.createElement("div");
    snow.innerHTML = "❄";
    snow.style.position = "fixed";
    snow.style.left = Math.random() * innerWidth + "px";
    snow.style.top = "-20px";
    snow.style.fontSize = (10 + Math.random() * 20) + "px";
    snow.style.opacity = Math.random();
    snow.style.color = "white";
    snow.style.pointerEvents = "none";
    snow.style.transition = "transform 4s linear, opacity 4s";
    document.body.appendChild(snow);

    setTimeout(() => {
        snow.style.transform = `translateY(${innerHeight + 50}px)`;
        snow.style.opacity = 0;
    }, 50);

    setTimeout(() => snow.remove(), 4500);
}, 150);
