const images = document.querySelectorAll('.carousel-image');
const thumbs = document.querySelectorAll('.thumb');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function showSlide(index){

  images.forEach((img)=>{
    img.classList.remove('active');
  });

  thumbs.forEach((thumb)=>{
    thumb.classList.remove('active-thumb');
  });

  images[index].classList.add('active');
  thumbs[index].classList.add('active-thumb');
}

nextBtn.addEventListener('click', ()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showSlide(currentIndex);
});

prevBtn.addEventListener('click', ()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showSlide(currentIndex);
});

thumbs.forEach((thumb,index)=>{

  thumb.addEventListener('click', ()=>{

    currentIndex = index;

    showSlide(index);

  });

});


setInterval(()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showSlide(currentIndex);

},5000);




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item)=>{

  const question = item.querySelector('.faq-question');

  question.addEventListener('click', ()=>{

    faqItems.forEach((faq)=>{
      faq.classList.remove('active-faq');
    });

    item.classList.add('active-faq');

  });

});

/* APPLICATION SLIDER */

const applicationsTrack = document.querySelector('.applications-track');

const appNext = document.querySelector('.app-next');

const appPrev = document.querySelector('.app-prev');

let appIndex = 0;

const cardWidth = 406;

appNext.addEventListener('click', ()=>{

  appIndex++;

  if(appIndex > 1){
    appIndex = 0;
  }

  applicationsTrack.style.transform =
  `translateX(-${appIndex * cardWidth}px)`;

});

appPrev.addEventListener('click', ()=>{

  appIndex--;

  if(appIndex < 0){
    appIndex = 1;
  }

  applicationsTrack.style.transform =
  `translateX(-${appIndex * cardWidth}px)`;

});
/* PROCESS TABS */

const processTabs = document.querySelectorAll('.process-tab');

processTabs.forEach((tab)=>{

  tab.addEventListener('click', ()=>{

    processTabs.forEach((item)=>{
      item.classList.remove('active-process-tab');
    });

    tab.classList.add('active-process-tab');

  });

});
/* TESTIMONIAL SLIDER */

const testimonialTrack =
document.querySelector('.testimonial-track');

const testimonialNext =
document.querySelector('.testimonial-next');

const testimonialPrev =
document.querySelector('.testimonial-prev');

let testimonialIndex = 0;

const testimonialCardWidth = 382;

testimonialNext.addEventListener('click', ()=>{

  testimonialIndex++;

  if(testimonialIndex > 1){
    testimonialIndex = 0;
  }

  testimonialTrack.style.transform =
  `translateX(-${testimonialIndex * testimonialCardWidth}px)`;

});

testimonialPrev.addEventListener('click', ()=>{

  testimonialIndex--;

  if(testimonialIndex < 0){
    testimonialIndex = 1;
  }

  testimonialTrack.style.transform =
  `translateX(-${testimonialIndex * testimonialCardWidth}px)`;

});
/* IMAGE CLICK ZOOM */

const imageWrapper =
document.querySelector('.image-inner');

const image =
document.querySelector('.main-image');

const lens =
document.querySelector('.zoom-lens');

const preview =
document.querySelector('.zoom-preview');

const zoomed =
document.querySelector('.zoomed-image');

const clickLayer =
document.querySelector('.zoom-click-layer');

/* MOVE LENS */

imageWrapper.addEventListener('mousemove',(e)=>{

  const rect =
  image.getBoundingClientRect();

  const x =
  e.clientX - rect.left;

  const y =
  e.clientY - rect.top;

  const lensSize = 95;

  let lensX =
  x - lensSize / 2;

  let lensY =
  y - lensSize / 2;

  if(lensX < 0){
    lensX = 0;
  }

  if(lensY < 0){
    lensY = 0;
  }

  if(lensX > rect.width - lensSize){
    lensX = rect.width - lensSize;
  }

  if(lensY > rect.height - lensSize){
    lensY = rect.height - lensSize;
  }

  lens.style.left =
  `${lensX}px`;

  lens.style.top =
  `${lensY}px`;

});

/* CLICK TO ZOOM */

clickLayer.addEventListener('click',(e)=>{

  const rect =
  image.getBoundingClientRect();

  const x =
  e.clientX - rect.left;

  const y =
  e.clientY - rect.top;

  const zoomLevel = 2.5;

  preview.style.display = 'block';

  zoomed.style.width =
  `${rect.width * zoomLevel}px`;

  zoomed.style.height =
  `${rect.height * zoomLevel}px`;

  const moveX =
  (x * zoomLevel) -
  (preview.offsetWidth / 2);

  const moveY =
  (y * zoomLevel) -
  (preview.offsetHeight / 2);

  zoomed.style.transform =
  `translate(-${moveX}px,-${moveY}px)`;

});

/* HIDE */

imageWrapper.addEventListener('mouseleave',()=>{

  preview.style.display = 'none';

});
/* DATASHEET MODAL */

const datasheetBtn =
document.querySelector('.datasheet-btn');

const datasheetModal =
document.querySelector('.datasheet-modal');

const modalClose =
document.querySelector('.modal-close');

const modalOverlay =
document.querySelector('.datasheet-overlay');

/* OPEN */

datasheetBtn.addEventListener('click', ()=>{

  datasheetModal.classList.add('active-modal');

});

/* CLOSE BUTTON */

modalClose.addEventListener('click', ()=>{

  datasheetModal.classList.remove('active-modal');

});

/* CLOSE OVERLAY */

modalOverlay.addEventListener('click', ()=>{

  datasheetModal.classList.remove('active-modal');

});
/* REQUEST QUOTE MODAL */

const quoteBtn =
document.querySelector('.quote-btn');

const quoteModal =
document.querySelector('.quote-modal');

const quoteModalClose =
document.querySelector('.quote-modal-close');

const quoteModalOverlay =
document.querySelector('.quote-modal-overlay');

/* OPEN */

quoteBtn.addEventListener('click', ()=>{

  quoteModal.classList.add('active-quote-modal');

});

/* CLOSE BUTTON */

quoteModalClose.addEventListener('click', ()=>{

  quoteModal.classList.remove('active-quote-modal');

});

/* CLOSE OVERLAY */

quoteModalOverlay.addEventListener('click', ()=>{

  quoteModal.classList.remove('active-quote-modal');

});

/* STICKY PRODUCT BAR */

const stickyBar =
document.querySelector('.sticky-product-bar');

const priceCard =
document.querySelector('.price-card');

window.addEventListener('scroll', ()=>{

  const priceCardBottom =
  priceCard.getBoundingClientRect().bottom;

  if(priceCardBottom < 0){

    stickyBar.classList.add('active-sticky-bar');

  }else{

    stickyBar.classList.remove('active-sticky-bar');

  }

});