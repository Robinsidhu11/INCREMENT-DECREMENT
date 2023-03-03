
let textbox = document.getElementsByClassName("valuebox")[0]
textbox.innerHTML=0

let incrementbox=document.getElementsByClassName("increment")[0]

let plusvalue=()=>{
  let value_inside_textbox = parseInt(textbox.textContent)+1
  if(value_inside_textbox>=1000 || value_inside_textbox<=-100){
    textbox.style.width="fit-content"
  }
  else{
    textbox.style.width="130px"
  }
  textbox.innerHTML=(value_inside_textbox).toString()
  
}
incrementbox.addEventListener('click',plusvalue)

let decrementbox=document.getElementsByClassName("decrement")[0]
let minusvalue=()=>{
  let value_inside_textbox = parseInt(textbox.textContent)-1

  if(value_inside_textbox>=1000 || value_inside_textbox<=-100){
    textbox.style.width="fit-content"
  }
  else{
    textbox.style.width="130px"
  }
  
  textbox.innerHTML=(value_inside_textbox).toString()
}
decrementbox.addEventListener('click',minusvalue)
