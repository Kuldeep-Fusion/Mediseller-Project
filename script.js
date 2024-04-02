let scrollController = document.querySelector('.image-gallery');
let nextBtn = document.querySelector('.btn-1'); 
let prevBtn = document.querySelector('.btn-2'); 

scrollController.addEventListener('wheel', (e) => {
e.preventDefault();
scrollController.style.scrollBehavior = "smooth"
scrollController.scrollLeft += e.deltaY;

});

prevBtn.addEventListener('click', () => {
    scrollController.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    scrollController.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});