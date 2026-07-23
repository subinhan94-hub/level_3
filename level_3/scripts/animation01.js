// item1에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
// 변수
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
// 변수 테스트
console.log(item1, item1Img);

// 이벤트
item1.addEventListener('mouseover' ,item1TmgSrc)
item1.addEventListener('mouseout' ,item1ImgSrcOut)

// 함수
function item1TmgSrc() {
    item1Img.src = 'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1950358366603-967b4b88-b15f-439b-afcb-0741c0948372.jpg';
}
function item1ImgSrcOut() {
    item1Img.src = 'https://thumbnail.coupangcdn.com/thumbnails/remote/292x292ex/image/retail/images/2026/02/12/18/5/4390800c-af50-400d-ba51-d71b7f08b6dd.jpg'
}

// 할인상품

// 변수
const sale = document.querySelector('.sale');
const saleImg = document.querySelector('.sale .photo img');

// 변수 테스트
console.log(sale, saleImg)

//이벤트
sale.addEventListener('mouseover' ,slaeImgSrc)
sale.addEventListener('mouseout' ,slaeImgSrcOut)

//함수
function slaeImgSrc() {
    saleImg.src = 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/4058/94f98b131645959f48886269825f54a14ab1cb88481fbb742c8b771a0a1d.jpg'
}
function slaeImgSrcOut() {
    saleImg.src = 'https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/6cae/c71bcefe31e143160547f90d30212bc4ff6662fbaf48840f5c887c7c9ded.jpg'
}