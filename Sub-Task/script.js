const button = document.getElementById('changeColorButton');

button.addEventListener('click', () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.style.backgroundColor = randomColor;
});
