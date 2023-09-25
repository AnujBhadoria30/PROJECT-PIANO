// let btn = document.getElementById("btn");
// let music_a = document.getElementsByClassName("music")[0];
// let music_d = document.getElementsByClassName("music")[1];
let toggle = document.getElementById("spn_1");
// let buttonclick=document.getElementsByClassName("key yup")[0];
let div =document.querySelectorAll(".yup div")
// console.log(div);


flag = true;
div.forEach(h=>{
  h.classList.add("hidden")
})

function Event() {
  if (flag == true) {
    console.log("inside1st")
    btn.setAttribute("class", "move");
    toggle.setAttribute("class", "spn");
    div.forEach(h=>{
      h.classList.remove("hidden")
      
    })
    
    flag = false;
  } else {
    console.log("inside2st")
    toggle.removeAttribute("class", "spn");
    btn.removeAttribute("class", "move");
    flag = true;
    div.forEach(h=>{
      h.classList.add("hidden")
      
    })
    
    // div.forEach(h=>{
    //   h.classList.remove("hidden")
      
    // })
  }
  
}

// buttonclick.addEventListener('onclick',(e)=>{
//   console.log(e)
//   music_a.play();
// })
// function fun()
// {
//   music_a.play();
// }
// let gana = new Audio();//by class add music
let key = document.querySelectorAll(".yup");
let gana =document.getElementById("music");
function setmusic(data)
{
  gana.src=`tunes/${data}.wav`
  // if(data=='A')
  // {
  //   gana.src ="tunes/A.wav"
  // }
  console.log(gana);
  
  gana.play();
}
// console.log(key);
key.forEach(value =>{
  console.log(value);
  value.addEventListener("click",(e)=>{
    console.log(value.dataset.key);
    setmusic(value.dataset.key);
  })
})