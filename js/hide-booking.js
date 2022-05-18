// Listen for new scroll events
document.addEventListener("scroll", () => {
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