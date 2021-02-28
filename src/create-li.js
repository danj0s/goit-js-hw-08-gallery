import photo from './gallery-items.js';
const modalPhoto = document.querySelector('.lightbox__image')
  const addClass = document.querySelector('.js-lightbox')
console.log(photo);
const overlay = document.querySelector(".lightbox__overlay")
const button = document.querySelector(".lightbox__button")

const ul = document.querySelector('.js-gallery');
let list = ``;
photo.map(el => {
  const preview = el.preview;
    const description = el.description;
    const original = el.original;
  list += `<li> <a class= "gallery__link" href="${original}"> <img class= 'gallery__image' src= "${preview}"
   data-source='${original}' alt="${description}"/> </a> </li>`;
});
console.log(list);  
console.log(ul);
ul.insertAdjacentHTML('beforeend', list);
// const img
const modalLink = document.querySelector('.gallery__link')

const openModal = (event) => {
    console.log(event.currentTarget);
    event.preventDefault();
  
    addClass.classList.add('is-open')
  modalPhoto.src = event.target.getAttribute('data-source')
}
const removeOpenModal = (event) => {
console.log(event);
  if ((event.code === "Escape") || (event.target === overlay) || (event.target === button)) {
    addClass.classList.remove('is-open')
    
  } else{return}
  

  
  
  // !! Альтернативное решение закритие модального окна !!

//   if (event.target !== modalPhoto) {
//   addClass.classList.remove('is-open')
// }
}

ul.addEventListener('click', openModal);

addClass.addEventListener('click', removeOpenModal);
window.addEventListener('keydown', removeOpenModal);


