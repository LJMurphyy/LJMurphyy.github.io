// For back to top scroll
const backToTop = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function () {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
};

// For Data Stream Animation on main-page-container
const background = document.querySelector('.main-page-container');
const numColumns = Math.floor(window.innerWidth / 20);

function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');
    
    line.style.left = Math.floor(Math.random() * numColumns) * 20 + 'px'; 
    line.style.height = Math.random() * 50 + 50 + 'px'; 
    line.style.animationDuration = Math.random() * 3 + 8 + 's'; 

    background.appendChild(line);
}

setInterval(createLine, 700);
