// const imgs = document.querySelectorAll('.hero-slider ul img');
// const prev_btn = document.querySelector('.control-prev');
// const next_btn = document.querySelector('.control-next');
// let a = 0;

// function heroChange(){
//   for(let n=0;n<imgs.length;n++){
//     imgs[n].style.display = "none";
//   }
//   imgs[a].style.display ="block";
// }
// heroChange();

// prev_btn.addEventListener('click', (slide)=>{
//   if(a>0){
//     a--;
//   }
//   else{
//     a = imgs.length - 1;
//   }
//   heroChange();
// });

// next_btn.addEventListener('click', (slide)=>{
//   if(a<imgs.length-1){
//     a++;
//   }
//   else{
//     a = 0;
//   }
//   heroChange();
// });





// const imageContainer = document.querySelectorAll('.images');
// for( const item of imageContainer){
  
//   item.addEventListener('wheel', (evt)=>{
// evt.preventDefault();
// item.scrollLeft += evt.deltaY;
//   })
// }

const success = document.querySelectorAll(".eventrow .eventcontainer");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");
let a = 0;

function changeDiv(){
  for(let i=0;i<length.success;i++){
    success[i].style.display = "none";
  }
     success[i].style.display ="block";
  }
  changeDiv();
  
  prev_btn.addEventListener('click', (slide)=>{
    if(i>0){
      i--;
    }
    else{
      i = imgs.length - 1;
    }
    changeDiv();
  });
  
  next_btn.addEventListener('click', (slide)=>{
    if(i<imgs.length-1){
      i++;
    }
    else{
      i = 0;
    }
   changeDiv();
  });