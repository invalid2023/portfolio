
let all=document.getElementById("01")
let ecommerce=document.getElementById("02")
let educational=document.getElementById("03")
function allwork(){
    let works=document.getElementsByClassName("works")
    for(let i=0;i<works[0].children.length;i++){
        works[0].children[i].style.display="block"
    }
}
function ecommercework(){
    let works=document.getElementsByClassName("works")
for(let i=0;i<works[0].children.length;i++){

       if(works[0].children[i].className=="item educational"){
        console.log(works[0].children[i].className)
        works[0].children[i].style.display="none"
       }
     if(works[0].children[i].className=="item ecommerce"){
        console.log(works[0].children[i].className)
        works[0].children[i].style.display="block"

     }
   }
}
function educationalwork(){
    let works=document.getElementsByClassName("works")
    for(let i=0;i<works[0].children.length;i++){
        if(works[0].children[i].className=="item educational"){
            works[0].children[i].style.display="block"
        }else{
            works[0].children[i].style.display="none"
        }
    }

}
all.addEventListener("click",function(event){
    allwork()

})
ecommerce.addEventListener("click",function(event){
ecommercework()
})
educational.addEventListener("click",function(){
 educationalwork()
})

if(localStorage.getItem('page')==1){
 allwork()
}
if(localStorage.getItem('page')==2){
    ecommercework()
}
if(localStorage.getItem('page')==3){
    educationalwork()
}