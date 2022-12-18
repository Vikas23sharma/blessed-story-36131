//Navbar import
import {Navbar} from './navbar/script.js';

document.querySelector("#navbar").innerHTML = Navbar();

function carousel(){

    let arr=[{image:"./Photos/img1.png"},
    {image:"./Photos/img2.png"},
    {image:"./Photos/img3.png"},
    {image:"./Photos/img4.png"},
    {image:"./Photos/img5.png"},
    {image:"./Photos/img6.png"},
    {image:"./Photos/img7.png"},
    {image:"./Photos/img8.png"},
    {image:"./Photos/img9.png"}

    ]
    let img=document.createElement("img");
    img.src=arr[0].image;
    document.querySelector("#carousel").append(img)
    let i=1;
    
    let a=setInterval(function(){
            if(i==arr.length){
                i=1;  //0--->will append img for 3+3 second
            }
            
            img.src=arr[i].image;
            document.querySelector("#carousel").append(img)
               
            i++;
             },3000);
    
    
    
    }
    carousel()