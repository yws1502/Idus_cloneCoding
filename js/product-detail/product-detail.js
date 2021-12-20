const content = document.querySelector('.content');
const contentInfo = content.querySelector('#content-fixed');
const contentInfoHeight = content.getBoundingClientRect().top * 2;

window.addEventListener('scroll', () => {
  if (window.scrollY > contentInfoHeight) {
    contentInfo.classList.add('fixed');
  } else {
      contentInfo.classList.remove('fixed');
    }
});
