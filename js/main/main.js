// 최상단 광고 배너 삭제 버튼
const topAdBanner = document.querySelector(".advertisement");
const topAdBtn = topAdBanner.querySelector(".btn-closeAd");
topAdBtn.addEventListener("click", () => {
  topAdBanner.style.display = "none";
})

// 전역 네비게이션 바 상단 fixed
const contentInfo = document.querySelector('.gnb');
const contentInfoHeight = contentInfo.getBoundingClientRect().bottom;
document.addEventListener('scroll', () => {
  if (window.scrollY > contentInfoHeight) {
    contentInfo.classList.add('gnb-fixed');
  } else {
    contentInfo.classList.remove('gnb-fixed');
  }
});
