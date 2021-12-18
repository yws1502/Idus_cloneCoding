const contentInfo = document.querySelector('#content-fixed');
const content = document.querySelector('.content');
const contentInfoHeight = content.getBoundingClientRect().top * 2;

document.addEventListener('scroll', () => {
  if (window.scrollY > contentInfoHeight) {
    contentInfo.classList.add('fixed');
  } else {
      console.log(contentInfoHeight);
        contentInfo.classList.remove('fixed');
    }
});
