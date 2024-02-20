
const imageslider = document.querySelector("#imageslider")
const prevbtn =document.querySelector("#prevtbtn")
const nextbtn = document.querySelector("#nextbtn")

var imageNumber = document.getElementById("#image-number");


const images = [
  
  "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?size=626&ext=jpg&ga=GA1.2.506855519.1703226778&semt=sph",
  "https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?size=626&ext=jpg&ga=GA1.1.506855519.1703226778&semt=sph" , 
  "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.506855519.1703226778&semt=sph",
  "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.506855519.1703226778&semt=sph"
]

let indeximage = 0
function currentimage(){
    imageslider.src = images[indeximage]
    
}
currentimage()

//hundle next button
nextbtn.addEventListener("click",function(){
   
    indeximage++;
    if(indeximage >= images.length -1){
        indeximage = 0
        
    }
    document.getElementById("p1").innerHTML=indeximage+1;
    currentimage()
    // if(indeximage==images.length -1){
    //     nextbtn .style.display = "none"
    // }
})

//  hundle prevbtn 

prevbtn.addEventListener("click", function(){
    indeximage--;
    if(indeximage < 0){
        indeximage = 2
    }
    document.getElementById("p1").innerHTML=indeximage+1;
   
    currentimage()
})