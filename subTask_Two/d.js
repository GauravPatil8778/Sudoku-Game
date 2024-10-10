document.getElementById('colorChangeBtn').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F33FFF', '#FFF333'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
