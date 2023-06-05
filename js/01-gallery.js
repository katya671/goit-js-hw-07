import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function onClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const imageURL = event.target.dataset.source;

  const options = {
    onShow: () => {
      document.addEventListener("keydown", onKeyDown);
      console.log("listening now");
    },
    onClose: () => {
      document.removeEventListener("keydown", onKeyDown);
      console.log("remove listener");
    },
  };

  const modal = basicLightbox.create(`<img src="${imageURL}">`, options);

  modal.element().querySelector("img").src = imageURL;

  function onKeyDown(event) {
    if (event.key === "Escape") {
      modal.close();
    }
  }

  modal.show();
}

gallery.addEventListener("click", onClick);
