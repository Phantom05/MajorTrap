// modal platform START
let modalPlatForm = function(){
  let modalAmount = document.getElementsByClassName('modalBt');
  let modal =document.getElementsByClassName('modal');
  let modalClost = document.getElementsByClassName('modal__close');
  
  for(var i =0;i<modalAmount.length;i++){
   modalAmount[i].addEventListener('click',function(){
     for(var j=0;j<modal.length;j++){
      if(modal[j].getAttribute('data-name') == this.getAttribute('data-name')){
       let modalTarget = modal[j];
       let modalClose = modalClost[j];
       modalTarget.style.display='block';
  
       modalClose.addEventListener('click',function(){
        modalTarget.style.display='none';
       })
       window.addEventListener('click',function(e){
         if(e.target == modalTarget){
          modalTarget.style.display='none';
         }
       })
      }
     }
   })
  }
}
modalPlatForm()

// modal platform END