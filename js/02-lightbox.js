import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEll = document.querySelector('.gallery');
const createGalleryCard = galleryItems.map(({ preview, original, description }) => {
  return`<a class="gallery__item" href="${original}" >
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}).join('');

galleryEll.insertAdjacentHTML("beforeend", createGalleryCard);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionPosition: `bottom`,
    captionDelay: `230`
});
console.log(lightbox)