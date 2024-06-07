// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.title);
    })