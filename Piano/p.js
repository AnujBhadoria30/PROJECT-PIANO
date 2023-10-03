let toggle = document.getElementById("spn_1");
let volume=document.querySelector(".volume")
let div = document.querySelectorAll(".yup div");
flag = true;
div.forEach((h) => {
  h.classList.add("hidden");
});
function Event() {
  if (flag == true) {
    // console.log("inside1st");
    btn.setAttribute("class", "move");
    toggle.setAttribute("class", "spn");
    div.forEach((h) => {
      h.classList.remove("hidden");
    });
    flag = false;
  } else {
    console.log("inside2st");
    toggle.removeAttribute("class", "spn");
    btn.removeAttribute("class", "move");
    flag = true;
    div.forEach((h) => {
      h.classList.add("hidden");
    });
  }
}
let key = document.querySelectorAll(".yup");
let gana = document.getElementById("music");
function setmusic(data) {
  gana.src = `tunes/${data}.wav`;
  // console.log(gana);   
  gana.play();
}
key.forEach((values) => {
  values.addEventListener("click", (e) => {
    setmusic(values.dataset.key)
    
  });
});
volume.addEventListener("click",(e)=>{
  // console.log(e.target.value)
  gana.volume=e.target.value;
})
// const arrkeys =['A','S','D','F','H','U','O','L','P',';','W','E','T','G','Y','J','K']
const arrkeys =[];
key.forEach((value)=>{
  arrkeys.push(value.dataset.key)

})


document.addEventListener("keydown",(e)=>
  {
    // console.log(e.key);
    if(arrkeys.includes((e.key).toUpperCase()))
    {setmusic(e.key)}
    
  })

