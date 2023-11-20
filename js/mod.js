
let item= document.getElementsByClassName("wrapper-content");
export let index=0;

export function show(id){
  if(window.screen.width<1024){
          
    return 
  }
  index=+id

    let item= document.getElementsByClassName("wrapper-content");
    let child=item[0].children;
   
       Array.from(child).forEach(function(item) {
   
           if(item.style.display=='block'){
             item.style.display='none'
           }
           console.log(child[id])
         $(child[id]).fadeIn(200)
          
     });
     

  
 }
 export let check=true;
  function checkPage(i){
  check=i;
 }
 function f(){
   check=true
 }
export function minus(){

 if(index==0){
   return
  }
 index=index-1;

 if(index==0){

   let i;
   show(index);
   checkPage(i=false)

   setTimeout(f,500)

  }
 if(index==1){
  let i;
  show(index)
  checkPage(i=false)

  setTimeout(f,500)
 }
  if(index==2){
    let i;
     show(index)
     checkPage(i=false)

     setTimeout(f,500)
  }
}
export function plus(){

   if(index==2){
    return
  }
 index=index+1;
   if(index==1){
    let i;
     show(index);
     checkPage(i=false)
   
     setTimeout(f,500)
 
  }
   if(index==2){
    let i;
     show(index)
     checkPage(i=false)
  
     setTimeout(f,500)

  }
}


