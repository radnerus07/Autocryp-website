var button = document.querySelector('.ham-button')
var slide = document.querySelector('.mobile-nav')

 button.addEventListener('click', () =>{
   slide.classList.toggle('display');
   button.children[0].classList.toggle('toggle1')
   button.children[1].classList.toggle('toggle2')
   button.children[2].classList.toggle('toggle3')
 })

 function changeBg(){
  var navbar = document.getElementById('nav');
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
      navbar.classList.remove('nav-bgcolor');
  } else{
      navbar.classList.add('nav-bgcolor');
  }
}

window.addEventListener('scroll', changeBg);


function changeText(){
  document.getElementById("chngeprice1").innerHTML = "$100";
  document.getElementById("chngeprice2").innerHTML = "$290";
  document.getElementById("chngeprice3").innerHTML = "$490";
  document.getElementById("chngetext1").innerHTML = "Per Year";
  document.getElementById("chngetext2").innerHTML = "Per Year";
  document.getElementById("chngetext3").innerHTML = "Per Year";

  
}

function revertBack(){
  document.getElementById("chngeprice1").innerHTML = "$10";
  document.getElementById("chngeprice2").innerHTML = "$29";
  document.getElementById("chngeprice3").innerHTML = "$49";
  document.getElementById("chngetext1").innerHTML = "Per Month";
  document.getElementById("chngetext2").innerHTML = "Per Month";
  document.getElementById("chngetext3").innerHTML = "Per Month";
}


// const slider = document.querySelector('.carousleslide-items');
// const cards = document.querySelectorAll('.carousle-cards')

// const dots = document.querySelectorAll('.dot');

// let activeDotNum = 0;

// dots.forEach((dot, idx)  => {
//   dot.setAttribute('data-num', idx);

//   dot.addEventListener('click', e => {
//     let clickedDotNum = e.target.dataset.num;
//     if(clickedDotNum == activeDotNum) { return; }
//     else{
//       let displayAreaWidth = document.querySelector('.carousleslide-items').clientWidth;
//       // console.log(displayAreaWidth);
//       let pixelsToMove = -displayAreaWidth * clickedDotNum;
//       slider.style.transform = 'translateX('+ pixelsToMove + ' px)';
//       dots[activeDotNum].classList.remove('active');
//       dots[clickedDotNum].classList.add('active');
//       activeDotNum = clickedDotNum;
//     }
//   });
// });


// const sliderCards = document.querySelectorAll('.carousle-cards');
// const dots = document.querySelectorAll('.dot');


// // console.log(dots);

// function removeActive() {

//     for (let i=0; i< sliderCards.children.length; i++)
//     {
//         if (sliderCards.children[i].classList.remove("active-cards") > -1){
//             intCurrent = i;
//         }
//         sliderCards.children[i].classList.remove('active-cards');
//         dots.children[i].classList.remove('active');
//     }
// }

// function addActive(intCurrent)
// {
//     sliderCards.children[intCurrent].classList.add("active-cards");
//     dots.children[intCurrent].classList.add("active-cards");
// }
// function init() {
//     sliderCards.children[0].classList.add("active-cards");
//     dots.children[0].classList.add("active");
//   }
//   init();

//   dots.addEventListener("click", function (e) {
//     if(e.target.className !=="dot") {
//         return;
//     }
//     let intNewIndex = e.target.dataset.num;
//     removeActive();asdw
//     addActive(intNewIndex);
//   });
const slider = document.querySelector('.carousleslide-items');
const cards = document.querySelectorAll('.carousle-cards');
const dots = document.querySelectorAll('.dot');


let slideWidth = cards[0].offsetWidth + 420;




slider .addEventListener('scroll', (e) => {
    scrollPosition = slider .scrollLeft;
});

dots.forEach(slideItem => {

    slideItem .addEventListener('click', (e) => {
        let slideNumber = slideItem .getAttribute('data-slide');
        slider .scrollLeft = slideNumber * slideWidth;
     })
})

