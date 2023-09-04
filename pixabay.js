// aceasta varianta este pentru a nu folosi jQuery

var API_KEY = 'YOUR_API_KEY';
var query = 'red roses';
var URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        if (parseInt(data.totalHits) > 0) {
            data.hits.forEach(hit => {
                console.log(hit.pageURL);
            });
        } else {
            console.log('No hits');
        }
    })
    .catch(error => console.error('Error fetching data:', error));