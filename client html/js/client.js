fetch('http://localhost:3000/labels')
    .then(response => response.json())
    .then(labels => console.log(json));