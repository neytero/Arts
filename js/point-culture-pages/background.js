import { getPagesLength, pageIndex } from "./pages.js";
import { isMobile } from "./point-culture.js";

const backgrounds = {
    front: [
        '../assets/point-culture/book-front.png',
        '../assets/point-culture/book-front.png'
    ],
    front_mobile: [
        '../../assets/point-culture/book-front-mobile.png',
        '../../assets/point-culture/book-front-mobile.png'
    ],
    back: [
        '../../assets/point-culture/book-back.png',
        '../../assets/point-culture/book-back.png'
    ],
    back_mobile: [
        '../../assets/point-culture/book-back-mobile.png',
        '../../assets/point-culture/book-back-mobile.png'
    ]
}

const selectBackground = (backGroundList) => {
    const index = Math.floor(Math.random() * (backGroundList.length));
    return backGroundList[index];
}


export const handleBookBackground = () => {
    const bookBackground = document.getElementById("book-background-img");
    if (pageIndex === 0) {
        bookBackground.setAttribute("src", selectBackground(isMobile() ? backgrounds.front_mobile : backgrounds.front));
        // bookBackground.setAttribute("src", selectBackground(backgrounds.front));
    } else if (pageIndex === getPagesLength()) {
        bookBackground.setAttribute("src", selectBackground(isMobile() ? backgrounds.back_mobile : backgrounds.back));
    } else {        
        bookBackground.setAttribute("src", `../assets/point-culture/book-open.png`);
    }
    
    if (isMobile()) {
        const bgHeight = parseInt(bookBackground.clientHeight);
        const diff = window.innerWidth - Math.round(bgHeight*0.75);
        const pageRight = document.getElementById("page-right");
        if(diff < 10) {
            bookBackground.style.maxHeight = `${Math.round(parseInt(window.innerWidth)/0.75) - 10}px`;
            pageRight.style.maxHeight = `${Math.round(parseInt(window.innerWidth)/0.75) - 10}px`;
            bookBackground.style.marginLeft = `-5px`;
        } else {
            const marginLeft = Math.round((window.innerWidth - parseInt(bookBackground.clientHeight)*0.75)/2);
            bookBackground.style.marginLeft = `-${marginLeft - 10}px`;
            bookBackground.style.maxHeight = `100%`;
            pageRight.style.maxHeight =  `100%`;
        }
    } else {
        bookBackground.style.marginLeft = `initial`;
        bookBackground.style.height = `100%`;
    }
};