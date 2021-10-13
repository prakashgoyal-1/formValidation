function clearError(){
    let errorArr = document.getElementsByClassName("formError");
    for(let item of errorArr){
        item.innerHTML ="";
    }
}

function setError(id, error){
    document.getElementById(id).innerHTML = error;
}

function formValidation(){
    
   let result = true;
   var count = 0;
    clearError();
   //----------------------Name validation ------------

   let name = document.getElementById("name").value;
    let stringName = name.toString();
    stringName = stringName.trim();
    let len = stringName.length;

   if(name.length != stringName.length){
    alert("you something is missing please check it");
       setError("nameError","*error Before and After Space is Not allowed");
       return false;
   }else if(name.length < 3){
    alert("you something is missing please check it");
    setError("nameError","  *error Name is less than 3");
        return false;               
    }else {
        count++;
        result = true;
    }
    //------------Fanthers name validation ---------------
    let fname = document.getElementById("fname").value;
    let fstringName = fname.toString();
    fstringName = fstringName.trim();
 
   if(fname.length != fstringName.length){
    alert("you something is missing please check it");
    setError("fnameError","*error Before and After Space is Not allowed");
       return false;

   }else if(fname.length < 3){
    alert("you something is missing please check it");
        setError("fnameError","  *error  length of Name should greater than 3");
            return false;               
    }else{
        count++;
        result = true;
    }
    ///-------------mobile validation -----------

    let mobile = document.getElementById("mobile").value;
    if(mobile.length < 10 ){
        alert("you something is missing please check it");
        setError("mobileError", "*error Mobile no. is less than 10 digits");
        return false ;
    }else if(mobile.length > 10 ){
        alert("you something is missing please check it");
        setError("mobileError", "*error Mobile no. is greater than 10 digits");
        return false ;
    }else {
        count++;
        result = true ;
    }

    //----------------Email validation ------------

    var email = document.getElementById("email").value;
    if(email.length > 30){
        alert("you something is missing please check it");
        setError("emailError", "*error Email length should be less than 30 characters");
        return false;
    }else{
        count++;
        result = true;       
    }
    
    //-------------Passoword validation------------

    let pass = document.getElementById("pwd").value;
    if(pass.length <7 ){
        alert("you something is missing please check it");
        setError("passError", "*error Passoward should be greater than 6 digit");
        return false ;
    }else{
        count++;
        result = true ;
    }
//------------- confirm password validation ---------

    let cpass = document.getElementById("cpass").value;
    if( cpass != pass){
        setError("passError", "*error Password not matched");
        result = false ;
    }else{
        count++;
        result = true;
    }

 
//--------------- alert message --------------
        if(count == 6){
            let res = confirm(" you fill form successfully, do you want to submit, press ok else cancel");
            if(res == true ){
                result = true;              
            }else{
                return false;
            }
        }else {
            alert("you something is missing please check it");
            return false ;
        }
        if(count == 6){

        }
// --------------- data send to local storage -------------
    if(count == 6){
        var  namee = document.getElementById("name").value;
        var  emaill = document.getElementById("email").value;
        var  passwordd = document.getElementById("pwd").value;
        localStorage.setItem("email",emaill);
        localStorage.setItem("password",passwordd);
        localStorage.setItem("name",namee);
    }

    return result;
}

// //-------------------login verification -----------


function verification(){
    var userId = document.getElementById("userid").value;
    var password = document.getElementById("pass").value;   
    var message = document.getElementById("error");
    var LuserId = localStorage.getItem("email");
    var Lpass = localStorage.getItem("password");
    var Lname = localStorage.getItem("name");

    if(userId == "" ){
        message.innerHTML = "Please Enter UserId";
        confirm("please enter User Id");
    }else if(userId != LuserId){
        message.innerHTML = "*User Id not Exit";
    }else if( userId == LuserId && password != Lpass){
        message.innerHTML = "Password is incorrect";
    }else {
        alert("Your UserId and Password is matched!");
        // var res = 
        confirm("Welcome  " + Lname );
        // if(res == true){
            
        // }
      //  message.innerHTML = "Welcome "+Lname+"!" ;
    }
   
}

