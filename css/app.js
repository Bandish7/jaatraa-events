

const imageContainer = document.querySelectorAll('.images');
for( const item of imageContainer){
  
  item.addEventListener('wheel', (evt)=>{
evt.preventDefault();
item.scrollLeft += evt.deltaY;
  })
}