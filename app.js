var imgCategory = document.querySelectorAll('.category img');
var subCategory = document.querySelectorAll('.category .subtitle');
var subValue = "";

subCategory.forEach((subtitle, index) => {
    subtitle.addEventListener('mouseover', () => {
        imgCategory[index].style.transform = "scale(1.15)";
        subtitle.style.opacity = "0.3";
        subValue = subtitle.innerHTML;
        subtitle.innerHTML = "";
    });

    subtitle.addEventListener('mouseout', () => {
        imgCategory[index].style.transform = "scale(1)";
        subtitle.style.opacity = "1";
        subtitle.innerHTML = subValue;
    });
});