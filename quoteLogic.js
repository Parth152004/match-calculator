let data;
async function fetchQuote(filter='') {
    let url = `https://api.api-ninjas.com/v2/quotes?categories=${filter}`;
    const options = {
        method: 'GET',
        headers: {
        'X-Api-Key':'4qktUkTkXWRGd7M/th3QUw==W3hQvgSQv0VLiQ5m',
        },
    }
    let response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
    let container = document.querySelector('.container');

    data.forEach(element => {
        let divElement = document.createElement('div');
        divElement.classList.add('container','quote');

        let h2 = document.createElement('h2');
        h2.innerText = element.quote;
        divElement.appendChild(h2); 

        let p = document.createElement('p');
        p.innerText = `- ${element.author}`;
        divElement.appendChild(p);
        container.appendChild(divElement);
    });
}

let inputQuote = document.getElementById('quoteInput');
inputQuote.addEventListener('input', function() {
    let filter = inputQuote.value.toLowerCase();
    console.log(filter);
    if(!filter == '') {
        fetchQuote(filter);
    }
});




