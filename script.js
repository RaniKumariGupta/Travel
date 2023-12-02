// const img_array=['bga.jpeg','bg7.jpeg','bg.jpeg']
// const array_length=img_array.length 

// let flag=0;

// const sliderFunction=()=>{
//      flag++
//      document.querySelector('img').src=`images/$(img_array[flag])`
// }
// let set=setInterval(sliderFunction,2000)

// function controller(x){
//     flag = flag + x;
//     slideshow(flag);

// }
// slideshow(flag);
// function slideshow(num){
//     let slides = document.getElementsByClassName('slide');

//     if(num == slides.length){
//         flag=0;
//         num=0;
//     }
//     if(num < 0){
//         flag = slides.length-1;
//         num = slides.length-1;
//     }

//     for(let y of slides){
//         y.style.display = "none";
//     }
//     slides[num].style.display = "block";
// }

const img_array = ['bga.jpeg','bg7.jpeg','bg.jpeg']
const array_length = img_array.length
let i = 0

const sliderFunction = () => {
    i++
    i = i % array_length
    //0%5->0
    //1%5->1
    //4%5->4 
    //5%5->0
    document.querySelector('img').src = `images/${img_array[i]}`
}
let set = setInterval(sliderFunction, 5000)

const next=()=>{
    i++
    i=i%array_length
    document.querySelector('img').src = `images/${img_array[i]}`
}
  
const prev=()=>{
    i--
    if(i<0){
        i=array_length-1
    }
    document.querySelector('img').src = `images/${img_array[i]}`
}

const stops=()=>{
         clearInterval(set)
}
const start=()=>{
    set = setInterval(sliderFunction, 5000)
}
