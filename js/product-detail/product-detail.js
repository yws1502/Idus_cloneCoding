const content = document.querySelector('.content');
const contentInfo = content.querySelector('.content-info');
const contentInfoHeight = content.getBoundingClientRect().top * 2;
const media = matchMedia('screen and (max-width: 980px)');

window.addEventListener('scroll', () => {
    if (window.scrollY > contentInfoHeight || !media) {
        contentInfo.classList.add('fixed');
    } else if (media || window.scrollY < contentInfoHeight) {
        contentInfo.classList.remove('fixed');
    } else {
        contentInfo.classList.remove('fixed');
    }
});

