const colors = ["#ff3c38", "#ffb400", "#00ffe0", "#38ff3c", "#ff38ff", "#fff338"];

document.body.addEventListener("click", (e) => {
  for (let i = 0; i < 50; i++) {   // Increased sparkle count from 20 → 50
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(sparkle);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50; // Slightly further spread

    sparkle.animate(
      [
        { transform: `translate(0,0) scale(1)`, opacity: 1 },
        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
      ],
      {
        duration: 1200 + Math.random() * 500,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    setTimeout(() => sparkle.remove(), 1800);
  }
});
