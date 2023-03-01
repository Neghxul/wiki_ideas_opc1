var imgCategory = document.querySelectorAll('.category img');


imgCategory.forEach((imgCat, index) => {
    imgCat.addEventListener('mouseover', () => {
        imgCat.style.transform = "scale(1.15)";
    });

    imgCat.addEventListener('mouseout', () => {
        imgCat.style.transform = "scale(1)";
    });
});