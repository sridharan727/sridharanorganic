const pass1 = document.getElementById("password")
const cpass = document.getElementById("cpassword")
const btn = document.getElementById("gradient-button")
const usr = document.getElementById("usr")
const eorph = document.getElementById("email")

let state={
    details:[]
}

function init(){
    let l_state = JSON.parse(localStorage.getItem('sign_up'));
    if(l_state!=null){
        state = l_state;
    }
    initListener();
}

function initListener(){
    if(btn){
        btn.addEventListener('click' ,(event)=>{
            event.preventDefault();
            update_values()
        })
    }
}

function update_state(){
    localStorage.setItem('sign_up',JSON.stringify(state));
    document.getElementById("result").innerHTML = "Account Created Successfully";
    redirect();
}


function update_values(){
    let pass = pass1.value;
    let c1pass = cpass.value;
    let username = usr.value;
    let email = eorph.value;
    
    var pattern = /^[a-z ,.'-]+$/i;
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(pattern.test(username))
    {
        if(emailRegex.test(email))
        {
            if(check_email(email))
            {
                if(pass==''||cpass=='' || !regularExpression.test(pass))
                {
                    document.getElementById("result").innerHTML = "Enter a Valid Password";
                }
                else if(pass!=c1pass)
                {
                    document.getElementById("result").innerHTML = "Passwords doesn't match";
                }
                else
                {
                    const detail=
                    {
                        username:usr.value,
                        ep:eorph.value,
                        password:pass1.value
                    }
                    state.details.push(detail);
                    update_state();
                    usr.value='';
                    eorph.value='';
                    pass1.value='';
                    cpass.value='';
                }
            }
        }
        else
        {
            document.getElementById("result").innerHTML = "Enter a Valid MailID";
        } 
    }
    else
    {
        document.getElementById("result").innerHTML = "Enter a Valid Username";
    }
}

function check_email(e_p){
    for(let i=0;i<state.details.length;i++) {
        if(e_p === state.details[i].ep) {
            document.getElementById("result").innerHTML = "User Already Exist";
            return false;
        }
    }
    return true;
}


function redirect() {
    window.location.href = "./index.html";
}

init();
export {state};























