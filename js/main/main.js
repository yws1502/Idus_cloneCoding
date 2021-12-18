const contentInfo = document.querySelector('.gnb');
const contentInfoHeight = contentInfo.getBoundingClientRect().bottom;
document.addEventListener('scroll', () => {
  if (window.scrollY > contentInfoHeight) {
    contentInfo.classList.add('gnb-fixed');
  } else {
    contentInfo.classList.remove('gnb-fixed');
  }
});