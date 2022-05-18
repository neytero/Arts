window.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementsByClassName("slide");

    slides[5].style.opacity = 1;
    slides[5].classList.add('fade');
    document.getElementById(`dot-5`).style.backgroundColor = 'white';

    slides[4].classList.add('fade');
    document.getElementById(`dot-4`).style.backgroundColor = 'transparent';
    slides[3].classList.add('fade');
    document.getElementById(`dot-3`).style.backgroundColor = 'transparent';
    slides[2].classList.add('fade');
    document.getElementById(`dot-2`).style.backgroundColor = 'transparent';
    slides[1].classList.add('fade');
    document.getElementById(`dot-1`).style.backgroundColor = 'transparent';
    document.getElementById(`dot-0`).style.backgroundColor = 'transparent';
    setTimeout(() => { showSlides() }, 4000)
})

// Listen for new scroll events
document.addEventListener("scroll", () => {
    const home = document.getElementById('home');
    const scrollHomeLimit = home.clientHeight - Math.round(home.clientHeight / 12)
    if (window.scrollY > 10) {
        document.getElementById('booking-btn').classList.add('scroll')
    } else {
        document.getElementById('booking-btn').classList.remove('scroll')
    }
    if (window.scrollY >= scrollHomeLimit) {
        document.getElementById('navbar').classList.add('scroll')
    } else {
        document.getElementById('navbar').classList.remove('scroll')
    }

    if (isFooterIsInViewport()) {
        document.getElementById('booking-btn').classList.add('hide-booking-fixed');
    } else {
        document.getElementById('booking-btn').classList.remove('hide-booking-fixed');
    }

});

const isFooterIsInViewport = () => {
    const footer = document.querySelector('.divider');

    const rect = footer.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const goTop = () => {
    window.scrollTo(0, 0);
}