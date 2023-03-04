const searchInput = document.getElementById('search-text');
const searchButton = document.getElementById('search-btn');
const searchForm = document.querySelector('#search-form')
const resultsDiv = document.getElementById('search-img');

searchForm.addEventListener('submit', handleSubmit)
    
    
async function handleSubmit(event) {
    event.preventDefault();
    const searchValue = searchInput.value;
    const searchQuery = searchValue.trim();
    resultsDiv.innerHTML = "";
    console.log(searchQuery);

    try {
        const results = await searchWikipedia(searchQuery);
        if (results.query.searchinfo.totalhits === 0) {
            alert('No results found. Try different keywords');
        }
        displayResults(results);
        resultsDiv.style.display = 'block';
        console.log(results);
    } catch (err) {
        console.log(err);
        alert('Failed to search wikipedia');
    }
}

async function searchWikipedia(searchQuery) {
    const endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    const response = await fetch(endPoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

function displayResults(results) {
    results.query.search.forEach(result => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        resultsDiv.insertAdjacentHTML(
            'beforeend',
            `<div class="result-item">
                <h3 class="result-title">
                    <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
                </h3>
                <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
                <span class="result-snippet">${result.snippet}</span><br>
            </div>`
        );
    });
}

