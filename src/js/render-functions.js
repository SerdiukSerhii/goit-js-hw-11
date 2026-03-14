export function createGallery(images) {
  return images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </li>
    `
    )
    .join('');
}

const galleryMarkup = createGallery(images);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// ============= init ===================
