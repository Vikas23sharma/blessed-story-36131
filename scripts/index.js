//Navbar import
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

function carousel(){

    let arr=[{image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218"}
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