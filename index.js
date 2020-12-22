window.addEventListener('load',()=>{
  const sounds=document.querySelectorAll('.sound');
  const pads= document.querySelectorAll('.pads div');
  const visul=document.querySelector('.visual');
  const colors=[ 
    'red','blue','yellow','orange','green','brown'
  ]
// console.log(sounds)
  // lets get sound here 
  pads.forEach(function(pad,i){
    pad.addEventListener('click',()=>{
      sounds[i].currentTime=0;
     sounds[i].play();
    myfun(i)
    })
  })
  // CREATE BUBBLES 
  // pads.forEach(function(pad,i){
  const myfun= i=>{
  const bubbles=document.createElement('div');
  visul.appendChild(bubbles);
  bubbles.style.backgroundColor=colors[i];
  bubbles.style.animation='jump 1s ease';
  bubbles.addEventListener('animationend',()=>{
    visul.removeChild(bubbles);
  });
};
});