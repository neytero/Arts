let loop;
let slideIndex = 5;
let carrouselTimeout;
const showSlides = () => {
    const slides = document.getElementsByClassName("slide")

    for (let i = 0; i < slides.length; i++) {
        document.getElementById(`dot-${i}`).style.backgroundColor = 'transparent';
        if (slideIndex === 5) {
            slides[slideIndex].style.opacity = 1;
            setTimeout(() => {
                slides[i].style.opacity = 1;
            }, 3000)
            if (i < 5) {
                slides[i].classList.remove('fade');
            }
        }
        if (i > slideIndex) {
            slides[i].style.opacity = 0;
            slides[i].classList.add('fade');
        } else {
            slides[i].style.opacity = 1;
        }
    }

    document.getElementById(`dot-${slideIndex}`).style.backgroundColor = 'white';
    slideIndex--;
    if (slideIndex < 0) { slideIndex = 5 }

    carrouselTimeout = setTimeout(showSlides, 5000);
}

const goToSlide = (id) => {
    clearTimeout(carrouselTimeout);
    slideIndex = id;
    showSlides();
}