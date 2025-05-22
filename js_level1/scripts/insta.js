//인스타그램 알고리즘
// 1. 프로필 클릭 시 개인 프로필 페이지로 이동기능(o)-페이지제작필요

const profileDOM = document.querySelector('.profile')
console.log(profileDOM);
profileDOM.addEventListener('click',profileGo);
function profileGo(){
    return window.location.href = 'insta_profile.html'
}

// 2. 우측 ... 메뉴 클릭 시 저장~신고 등 기능 실행(o)-저장~신고제작필요
// 3. 사진 한번 클릭 시 반응없음(x js)
// 4. 사진 두번 터치 시 좋아요 자동 등록(o)


const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img');
console.log(photo, likeImg);
console.log(likeImg.src)
//객체.속성 //속성  읽기
//객체.속성=값 //속성 값 변경
photo.addEventListener('dblclick',likeOn)
function likeOn(){
    //console.log('test');
    return likeImg.src = "./images/icons/like_on.png"
}
// 5. 좋아요 아이콘 한번 터치 시 좋아요(o), 다시 터치 시 좋아요 해제 반복(x-조건문공부필요)
//이미지 더블클릭 하기 전 기준
//위 likeImg 변수 활용(추가 변수x)
//호출함수 이미 준비됨(likeOn)

//likeImg.addEventListener('click', likeOn);
//(위) likeImg 클릭 시 실행되는 콜백함수
//(아래) likeImg객체가 a태그로 클릭 시 새로고침되서 스크롤이 위로 올라가는 문제 해결을 위한 방법
//콜백함수 호출이 아닌 익명함수 또는 화살표함수 이용필수
//익명함수 또는 화살표함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동으로 대입된다.
//위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명(e)을 작성하고 console.log()로 확인할 수 있다.
likeImg.addEventListener('click',function(e){
    //console.log(e);
    e.preventDefault();//태그의 동적기능 취소(a태그새로고침)
    likeOn();
});

// 6. 댓글 아이콘 터치 시 댓글 입력창 실행(o)-제작필요, 실행화면에서 바깥쪽 영역 터치 댓글입력창 닫힘
// 7. 공유 아이콘 터치 시 공유가능 계정들 표시된 창 실행(o)-제작필요, 바깥쪽 영역 터치 시 닫힘(o)
// 8. 즐겨찾기 아이콘 터치 시 즐겨찾기 저장(x-DB필요)이 됨과 동시에 컬렉션 선택 화면 출력(o), 바깥쪽 영역 터치 시 닫힘
// 9. 글 1줄, 날짜만 미리표시, 글 터치 시 전체 내용(나머지 글 줄과 해시태그 포함) 펼치기(o)
// 글 1줄, 날짜만 미리표시

const storyDOM = document.querySelector('.story');
const dateDOM = document.querySelector('.date');
const tagDOM = document.querySelector('.tag');
console.log(storyDOM, dateDOM);
//함수를 생성하지 않고 바로 작성한 이유? 반복이 아니고 즉시 실행되기때문
tagDOM.style.display = 'none';
//글 클릭 시 태그 표시
storyDOM.addEventListener('click',tagShow)
function tagShow(){
    return tagDOM.style.display = 'block';
}

// 10. 해시태그 터치 시 해당 태그 사용 게시글 페이지 이동(o)

const tag = document.querySelector('.tag')
console.log(tag);
tag.addEventListener('click',tagGo)
function tagGo(){
    return window.location.href = 'insta_tag.html';
}
//별도의 동적기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크걸기
//동적기능 예) 해외IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무 확인 등
// 13. 날짜 터치 기능 없음(x js)
// 추가 페이지 목록) 프로필 페이지(insta_profile.html), 저장~신고 등 기능, 댓글 입력창, 공유가능 계정들 표시, 컬렉션 선택 화면, 태그 사용 게시글(insta_tag.html)