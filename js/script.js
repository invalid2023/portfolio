"use strict"
import {plus} from "./mod.js"
import {minus} from "./mod.js"
import {check} from "./mod.js"
import {index} from "./mod.js"
 import {show} from "./mod.js"

  let allWork=document.getElementById('allWork')
  let ecommerceWork=document.getElementById('E-commerce')
  let educationalWork=document.getElementById('Educational')
 let ref0=document.getElementsByClassName('refLi0')
 let ref1=document.getElementsByClassName('refLi1')
let ref2=document.getElementsByClassName('refLi2')


export let page=0;
 
function start(allWork,ref0,ref1,ref2){

if(allWork==null){
  return
}
allWork.addEventListener('click',function (event){

    event.preventDefault()
   
     localStorage.setItem("page",1)
        window.location.href="works/works.html"

      
      

    })

    ecommerceWork.addEventListener('click',function (event){

      event.preventDefault()
     
       localStorage.setItem("page",2)
          window.location.href="works/works.html"
  
        
        
  
      })
      educationalWork.addEventListener('click',function (event){

        event.preventDefault()
       
         localStorage.setItem("page",3)
            window.location.href="works/works.html"
    
          
          
    
        })

    
     ref0.addEventListener('click', function (event) {
      
      show(event.target.id)

    });
    
    ref1.addEventListener('click', function (event) {
      show(event.target.id)
     
    });
    
    ref2.addEventListener('click', function (event) {
      show(event.target.id)
  
    });
    
    window.addEventListener('wheel', function(event) {

        if(window.screen.width<1024){
          
          return 
        }
      if(check==false){
        return
      }
     if(window.event.deltaY>0){
    
      plus(index)
      
    }else{

      minus(index)
      
    }
    });
  }
  




start(allWork,ref0[0],ref1[0],ref2[0])
