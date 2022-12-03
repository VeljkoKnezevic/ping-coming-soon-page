const input = document.querySelector(".main__email__input");
const button = document.querySelector(".main__email__button");
const error = document.querySelector(".main__email__error");


function isEmail(emailAdress){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (emailAdress.match(regex)) 
  return true; 

 else 
  return false; 
}



button.addEventListener("click", () => {
  if(input.value == "") {
    error.style.display = "block";
    input.style.borderColor = "#FF5466";

  } else if(!isEmail(input.value)) {
    error.style.display = "block";
    input.style.borderColor = "#FF5466";

  } else {
    error.style.display = "none";
    input.style.borderColor = "#4BB543";
  }

})