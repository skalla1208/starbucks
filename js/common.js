const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML속성을 지정 setAttribute(속성이름, 속성값)
});

searchInputEl.addEventListener('blur', function(){  //blur 포커스 해제
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  
//new 생성자함수
// getFullYear 현재년도의 정보가 숫자 정보로 반환