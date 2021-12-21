const content = document.querySelector('.content');
const contentInfo = content.querySelector('.content-info');
const contentInfoHeight = content.getBoundingClientRect().top * 2;
const media = matchMedia('screen and (min-width: 1024px)');

window.addEventListener('scroll', () => {
    if (window.scrollY > contentInfoHeight && !media) {
        contentInfo.classList.add('fixed');
    } else {
        contentInfo.classList.remove('fixed');
    }
});
