// 페이지 로딩 시 실행되는 코드
document.addEventListener("DOMContentLoaded", function() {
  // 페이지 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", handleScroll);
});

// 스크롤 이벤트 핸들러
function handleScroll() {
  // 현재 보이는 섹션에 해당하는 메뉴 활성화
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
}

// 페이지가 로드되면 실행
window.onload = function() {
  // 모든 이미지가 로드될 때까지 대기
  var images = document.querySelectorAll('img');
  var loadedImagesCount = 0;
  
  for (var i = 0; i < images.length; i++) {
      // 이미지 로딩이 완료되면 카운트 증가
      images[i].addEventListener('load', function() {
          loadedImagesCount++;
          
          // 모든 이미지 로딩이 완료되면 갤러리 조정 및 스크롤 수행
          if (loadedImagesCount === images.length) {
              adjustGallery();

              // 일정 시간 후에 스크롤 수행
              setTimeout(() => {
                  // 큰 이미지 요소 선택
                  var bigImage = document.querySelector('img[src="img/whatsyourname.jpg"]');

                  // 큰 이미지로 스크롤
                  bigImage.scrollIntoView({behavior: "smooth"});
              }, 1000);
          }
      });
  }
}




// 갤러리 이미지 간격 조절
function adjustGallery() {
    var images = document.querySelectorAll('.gallery-image'); // 모든 갤러리 이미지 선택
    var containerWidth = document.querySelector('.gallery').offsetWidth; // 갤러리 컨테이너 너비
    var totalImageWidth = 0; // 이미지들의 총 너비
    
    // 모든 이미지 너비 합산
    for (var i = 0; i < images.length; i++) {
        totalImageWidth += images[i].offsetWidth;
    }
    
    // 계산된 간격: (컨테이너 너비 - 이미지들의 총 너비)를 이미지 수 - 1로 나눔 (이미지 사이에만 간격이 있음)
    var calculatedGap = (containerWidth - totalImageWidth) / (images.length - 1);
    
    // 각 이미지 항목에 마진 적용
    for (var i = 0; i < images.length - 1; i++) { // 마지막 이미지에는 마진 적용 안 함
        images[i].parentElement.style.marginRight = calculatedGap + 'px';
    }
}



document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    const bigImage = document.querySelector('img[src="img/whatsyourname.jpg"]');

    window.scrollTo({
      top: bigImage.offsetTop,
      behavior: 'smooth'
    });
  }, 0);
});
