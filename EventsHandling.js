// function show(){
//   let changeColor = document.getElementById("box-3");
//   changeColor.style.background="red";  
// }

// let inputFeild = ()=>{
//     let changeCol = document.getElementById("field");
//     changeCol.style.background="red";
// }

// const changeText=()=>{
//    let changeData = document.getElementById("field").value;
//    document.getElementById("change-text").innerHTML=changeData;
// }

// function on_Submit(e){
//     console.log(e);
// }

let btn = document.querySelector("#btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
    let change = document.querySelector(".box-5")
    let change1 = document.querySelector(".box-4")
    let circle = document.querySelector(".box-2");
    change1.classList.toggle('green-c')
    change.classList.toggle('red-c')
    circle.classList.toggle('loader');
    console.log(change);
    console.log(circle);
});


// apply onfocus condition...
function onClick(){
    let user = document.getElementById("user");
    user.style.background="yellow";
}

function onClick1(){
    let pass = document.getElementById("pass");
    pass.style.background="yellow";
}

// apply validation condition
function validateForm(){
    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    let flag=0;

   if(username.value==""){
    document.getElementById("userError").innerHTML="All field fill is mandatory.."
   }else if(username.value.length<5){
    document.getElementById("userError").innerHTML="username is mandatory min 5 digit..";
    flag=0;
   }else{
    document.getElementById("userError").innerHTML="";
    flag=1;
   }
   if(password.value==""){
    document.getElementById("passError").innerHTML="All field fill is mandatory.."
   }else if(password.value.length<5){
    document.getElementById("passError").innerHTML="password is mandatory min 5 digit..";
    flag=0;
   }else{
    document.getElementById("passError").innerHTML="";
    flag=1;
   }
   return false;
}

function sendEmail(){

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message =>{
    alert("Email Sent Successfully")
  }
);
}

