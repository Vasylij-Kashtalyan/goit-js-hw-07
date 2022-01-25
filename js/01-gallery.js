import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEll = document.querySelector('.gallery');
const createGalleryCard = galleryItems.map(({ preview, original, description }) => {
  return`<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
}).join('');
console.log(createGalleryCard);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    };
    const original = event.target.dataset.source
    const instance = basicLightbox.create(`
     <div class="modal">
        <p>
        <img src = ${original}>
        </p>
     </div>
     `)
    instance.show()
};
galleryEll.insertAdjacentHTML("beforeend",createGalleryCard);
galleryEll.addEventListener("click", onGalleryClick);