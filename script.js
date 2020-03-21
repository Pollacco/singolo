
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

const phone1 = document.querySelector('.phone1');
const phone2 = document.querySelector('.phone2');

const onOff = (e) => {
  console.log(e.currentTarget);
  const phones = [...e.currentTarget.children];
  phones.forEach(el => {
    if ([...el.classList].includes('hide')) el.classList.remove('hide');
    else el.classList.add('hide');
  })
}

phone1.addEventListener('click', onOff);
phone2.addEventListener('click', onOff);

// form

const form = document.querySelector('.form');
const message = document.getElementById('message');
const closeMessage = document.getElementById('close');
const subject = document.getElementById('subject');
const description = document.getElementById('description');

const defaultSubject = 'Без темы';
const defaultDescription = 'Без описания';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(subject.value) {
    document.getElementById('theme').innerHTML = `Тема: ${subject.value}`;
  }
  else {
    document.getElementById('theme').innerHTML = defaultSubject;
  }
  if(description.value) {
    const p = document.createElement('p');
    p.innerText = `${description.value}`;
    document.getElementById('desc').innerHTML = `Описание:`;
    document.getElementById('desc').append(p);
  }
  else {
    document.getElementById('desc').innerHTML = defaultDescription;
}
  message.classList.remove('hide');
})

closeMessage.addEventListener('click', () => message.classList.add('hide'));