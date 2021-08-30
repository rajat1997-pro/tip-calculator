function amountPerPerson(tipPercent){
  validate();
  var amount = parseFloat(document.querySelector(".bill").value);
  var people = parseFloat(document.querySelector(".people").value);
  var tip = parseFloat((tipPercent/100)*amount);
  var amountPerPerson = parseFloat(amount/people+tip);
  // alert("total amount" + amount);
   document.querySelector(".tip-amount").textContent = "$"+tip.toFixed(2);
   document.querySelector(".total-amount").textContent = "$"+amountPerPerson.toFixed(2);
   document.querySelector(".reset").removeAttribute("disabled");
}
// for tip buttons
var buttonList = document.querySelectorAll(".tip-button");

for (i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function (){
      buttonText = this.textContent.split("%")[0];
      amountPerPerson(buttonText);
  });
}

// for custom field
document.querySelector(".custom").addEventListener("keydown",function (event){
  if (event.key === "Enter"){
    var customPercent = event.target.value;
    amountPerPerson(customPercent);
  }

})

// for reset button
document.querySelector(".reset").addEventListener("click",function (){
  document.querySelector(".bill").value = "";
  document.querySelector(".people").value = "";
  document.querySelector(".custom").value = "";
  document.querySelector(".tip-amount").textContent = "$0.00";
  document.querySelector(".total-amount").textContent = "$0.00";
  document.querySelector(".reset").setAttribute("disabled","true");
})

//for validation
function validate(){
  var b = document.querySelector(".bill");
  if (b.value == "0"){
    alert("bill can't be zero");
  }
  else if (b.value === "") {
    alert("bill can't be empty");
  }
  var n = document.querySelector(".people");
  if (n.value == "0"){
    alert("no of people can't be zero");
  }
  else if (n.value === "") {
    alert("no of people can't be empty");
  }
}
