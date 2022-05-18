import { isMobile } from "./point-culture.js";
import { handleBookBackground } from "./background.js";
import * as Page from "./pages/index.js"

const pages = [
    [null, "renderPage0"],
    ["renderPage1", "renderPage2"],
    ["renderPage3", "renderPage4"],
    ["renderPage5", "renderPage6"],
    ["renderPage7", "renderPage8"],
    ["renderPage9", "renderPage10"],
    ["renderPage11", null]
]

const pagesMobile = [
    "renderPage0",
    "renderPage1", "renderPage2",
    "renderPage3", "renderPage4",
    "renderPage5", "renderPage6",
    "renderPage8", "renderPage7",
    "renderPage9", "renderPage10",
    "renderPage11"
];

export let pageIndex = 0;

export let isFromSummary = false;
export const isFromSummaryHandler = (update) => {
    isFromSummary = update;
}


export const getPagesLength = () => {
    return isMobile() ? pagesMobile.length - 1 : pages.length - 1;
}

export const pageChanger = (newPage = 0) => {
    handlePage(newPage);
    handleBookBackground();
    renderPages(pageIndex);
    if (pageIndex === '0') {
        this.handleSummary();        
    }
    document.getElementById("book-app").setAttribute("data-page", `${pageIndex}`);
};

export const pageLess = () => {
    pageChanger(pageIndex - 1);
};

export const pageMore = () => {
    pageChanger(pageIndex + 1);
};

const handlePage = (newPage = 0) => {
    if (newPage < 0) {
        pageIndex = 0;
    } else if (newPage >= getPagesLength()) {
        pageIndex = getPagesLength();
    } else {
        pageIndex = newPage;
    }
};

const renderPages = (page) => {
    const pageLeft = document.getElementById("page-left");
    const pageRight = document.getElementById("page-right");

    if (pageLeft.children.length) {
        pageLeft.removeChild(pageLeft.firstChild);
    }
    if (pageRight.children.length) {
        pageRight.removeChild(pageRight.firstChild);
    }

    if (isMobile()) {
        const book = document.getElementById("book-background-img");
        pageRight.appendChild(Page[`${pagesMobile[page]}`]());
        if(page > 0) {
            const pageContent = pageRight.firstChild;
            pageContent.style.maxWidth = `${book.clientHeight*0.75}px`
        }
    } else {
        if (pages[page][0]) {
            pageLeft.appendChild(Page[`${pages[page][0]}`]());
        }

        if (pages[page][1]) {
            pageRight.appendChild(Page[`${pages[page][1]}`]());
        }
    }
};