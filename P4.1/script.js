const galleryContainer = document.getElementById('gallery-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Image data
const images = [
  { id: 'foto1', title: 'Imagen 1' },
  { id: 'foto2', title: 'Imagen 2' },
  { id: 'foto3', title: 'Imagen 3' },
  { id: 'foto4', title: 'Imagen 4' },
  { id: 'foto5', title: 'Imagen 5' },
  { id: 'foto6', title: 'Imagen 6' },
  { id: 'foto7', title: 'Imagen 7' },
  { id: 'foto8', title: 'Imagen 8' }
];


const basePath = 'resize_img/output-adv/';

function createGallery() {
  images.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');

    const srcset = `${basePath}${image.id}-small-1x..jpg 480w, 
    ${basePath}${image.id}-small-2x..jpg 960w, 
    ${basePath}${image.id}-medium-1x..jpg 800w,
    ${basePath}${image.id}-medium-2x..jpg 1600w,
    ${basePath}${image.id}-large-1x..jpg 1200w,
    ${basePath}${image.id}-large-2x..jpg 2400w,
    ${basePath}${image.id}-xlarge-1x..jpg 1600w,
    ${basePath}${image.id}-xlarge-2x..jpg 3200w`;

    img.srcset = srcset;
    img.sizes = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw';

    img.src = `${basePath}${image.id}-medium-1x..jpg`;
    img.alt = image.title;

    img.dataset.full = `${basePath}${image.id}-xlarge-1x..jpg`;
    img.dataset.title = image.title;

    item.appendChild(img);
    galleryContainer.appendChild(item);

    item.addEventListener('click', () => {
      openModal(image);
    });
  });
}

function openModal(image) {
  lightbox.style.display = 'flex';

  const modalSrcset = `
        ${basePath}${image.id}-xlarge-1x..jpg 1x,
        ${basePath}${image.id}-xlarge-2x..jpg 2x
    `;

  lightboxImg.srcset = modalSrcset;
  lightboxImg.src = `${basePath}${image.id}-xlarge-1x..jpg`;
  lightboxImg.alt = image.title;
  captionText.innerHTML = image.title;
}

function closeModal() {
  lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeModal();
  }
});

createGallery();
