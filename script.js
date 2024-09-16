
const InputText = document.querySelector("#text-input");
const checkbtn = document.getElementById('check-btn');
const results = document.getElementById('result');
const subfor = document.getElementById("formb");


function revText (text){
    const letlist = [];
    for(const letter of text){
        letlist.unshift(letter.toLowerCase());
    }
 
    return letlist.join("");
}

function filterT (){
    const regex = /[\W+\s+_]/g;
     
    return InputText.value.replace(regex,'');


}

function checkPal () {
    
    if(filterT().toLowerCase() === ""){
        alert("Please input a value");
        results.innerHTML = `<h3 class="invalidT"><span id="result">Please input a value</span></h3>`;
        return;
    }
    if(filterT().toLowerCase() === revText(filterT())){
        results.innerHTML = `<h3 class="Correct"><span clas="result">${InputText.value} is a palindrome</span></h3>`;
    } else {
        results.innerHTML = `<h3 class="invalidT"><span class="result">${InputText.value} is not a palindrome</span></h3>`;
    }
}


checkbtn.addEventListener("click" , checkPal);

InputText.addEventListener("keydown", (key) => {
  if(key.key === "Enter"){
    checkPal();
  }
});

subfor.addEventListener("submit" , (e) => {
  e.preventDefault();
  checkPal();
})
