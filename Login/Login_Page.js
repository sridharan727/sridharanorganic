import {state} from '../Signin/Signin_Page.js';

const emailEl = document.getElementById("emailid");
const passEl = document.getElementById("password");
const btn = document.getElementById("grad-btn");

function init() 
{
    initListener();
}

function initListener() 
{
    btn.addEventListener('click',(event)=>{
        event.preventDefault();
        validate();
    })
}

function validate() 
{
  let c=0
  if(emailEl.value === "" || passEl.value === "") 
  {
      alert("Please enter the details")
  }
  else 
  {
      for(let i=0; i<state.details.length;i++)
      {
          c=0
          if( state.details[i].ep === emailEl.value && state.details[i].password === passEl.value) 
          {
              console.log("Logged In Successfully");
              document.getElementById("result").innerHTML = "Logged In Successfully";
              c=1
              redirect();
              break;
          }
          else if (state.details[i].ep === emailEl.value && state.details[i].password !== passEl.value)
          {
              console.log("Invalid Password for the Mail ID");
              document.getElementById("result").innerHTML = "Invalid Password for the Mail ID";
              c=1
              break;
          }
          else if (state.details[i].ep !== emailEl.value && state.details[i].password === passEl.value)
          {
              console.log("Account doesn't exist");
              document.getElementById("result").innerHTML = "Account doesn't exist";
              c=1
              break;
          }
      }
      if(c===0)
      {
        console.log("Account doesn't exist");
        document.getElementById("result").innerHTML = "Account doesn't exist";
      }
  } 
}

function redirect() {
    window.location.href = "https://kags-09.github.io/BuyWheels/Main_Page.html";
       
    
}

init();
