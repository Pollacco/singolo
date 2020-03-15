
const menu = document.querySelector('.navigation');
const tags = document.querySelector('.tags');
const images = document.querySelector('.layout-4-column');
const sliderPhones = document.querySelector('.slider__items');

const randomaizer = () => parseInt(Math.ceil(Math.random() * 100));
const shuffleImages = () => {
  [...images.children].forEach(elem =>  elem.style.order = randomaizer());
}

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('li').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
});

tags.addEventListener('click', (event) => {
    tags.querySelectorAll('span').forEach(elem => elem.classList.remove('tags-selected'));
    event.target.classList.add('tags-selected');
    shuffleImages();
});

images.addEventListener('click', (event) => {
    images.querySelectorAll('img').forEach(elem => elem.classList.remove('img-selected'));
    event.target.classList.add('img-selected');    
});

sliderPhones.addEventListener('click', (event) => {
    sliderPhones.querySelectorAll('img').forEach(elem => elem.classList.remove('hide'));
    event.target.classList.add('hide');
});
