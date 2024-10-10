fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Outputs: 8
