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

// ranking btn 실시간 급상승, 인기 검색어
const hideRanking = document.querySelector(".search-header .hide-ranking");
const rankingBtns = hideRanking.querySelector(".btn-wrap");

rankingBtns.addEventListener("click", (event) => {
  const realtime = hideRanking.querySelector(".realtime-list");
  const popular = hideRanking.querySelector(".popular-list");

  const currBtn = event.target;
  if (currBtn.classList.length === 1) {
    if (currBtn.classList[0] == "btn-realtime") {
      // 새로운 친구 on
      currBtn.classList.add("on");
      realtime.classList.add("on")
      // 기존에 있던 친구 제거
      popular.classList.remove("on");
      rankingBtns.querySelector(".btn-popular").classList.remove("on");
    } else { 
      // btn-popular
      currBtn.classList.add("on");
      popular.classList.add("on")

      realtime.classList.remove("on");
      rankingBtns.querySelector(".btn-realtime").classList.remove("on");
    }

  }
});



