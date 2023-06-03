import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </li>`
    }).join('');
}

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const onClick = (event) => {
    event.preventDefault();
    if (event.target.tagName !== "IMG") {
        return;
    }
    
    const imageURL = event.target.dataset.source;

    const modal = basicLightbox.create(`<img src="${imageURL}">`);

    modal.element().querySelector('img').src = imageURL;
    
    modal.show();
}

gallery.addEventListener('click', onClick);
