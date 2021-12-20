const content = document.querySelector('.content');
const contentInfo = content.querySelector('#content-fixed');
const contentInfoHeight = content.getBoundingClientRect().top * 2;

document.addEventListener('scroll', () => {
  if (window.scrollY > contentInfoHeight) {
    contentInfo.classList.add('fixed');
  } else {
      console.log(contentInfoHeight);
        contentInfo.classList.remove('fixed');
    }
});
