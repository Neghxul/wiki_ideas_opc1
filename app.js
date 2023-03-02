var imgCategory = document.querySelectorAll('.category img');
var subCategory = document.querySelectorAll('.category .subtitle');
var searchBar = document.querySelector('#search-text');
var body = document.querySelector('body');
var subValue = "";
var barActive = false;

subCategory.forEach((subtitle, index) => {
    subtitle.addEventListener('mouseover', () => {
        imgCategory[index].style.transform = "scale(1.15)";
        subtitle.style.opacity = "0.3";
        subtitle.style.cursor = "pointer";
        subValue = subtitle.innerHTML;
        subtitle.innerHTML = "";
    });

    subtitle.addEventListener('mouseout', () => {
        imgCategory[index].style.transform = "scale(1)";
        subtitle.style.opacity = "1";
        subtitle.innerHTML = subValue;
    });
});

document.addEventListener('mouseup', (e) => {
    if(!searchBar.contains(e.target)) {
        searchBar.style.background = "#aaa";
    } else {
        searchBar.style.background = "#fff";
    }
});