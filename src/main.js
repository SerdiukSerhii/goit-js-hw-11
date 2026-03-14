import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');



const lightbox = new SimpleLightbox('.js-gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// then(() => {
//     const markup = createGallery(data.hits);
//     gallery.innerHTML = markup;

//     lightbox.refresh()
// });

// ============= event ==========================
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const query = formData.get('search-text').trim();

  if (!query) return;

  gallery.innerHTML = '';

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length > 0) {
        const markup = createGallery(data.hits);
        gallery.innerHTML = markup;
      } else {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          icon: false,
        });
      }
    })
    .catch(error => {
      console.log(error);
    });

  form.reset();
});
