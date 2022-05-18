import { pageLess, pageMore, pageChanger, isFromSummary, isFromSummaryHandler, pageIndex } from "./pages.js";
import { handleBookBackground } from "./background.js";

export const isMobile = () => {
    return window.innerWidth <= 600;
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("js-area-click-left").onclick = () => pageLess();
    document.getElementById("js-area-click-right").onclick = () => pageMore();
    document.getElementById("arrow-left").onclick = () => pageLess();
    document.getElementById("arrow-right").onclick = () => pageMore();
    document.getElementById("summary").onclick = () => pageChanger();

    document.getElementById("page-left").onclick = () => pageLess();
    document.getElementById("page-right").onclick = () => {
        if(isFromSummary) {
            isFromSummaryHandler(false);
        } else {
            pageMore();
        }
    };

    handleBookBackground();
    pageChanger(0);
});

window.addEventListener('resize', () => {
    pageChanger(pageIndex);
});