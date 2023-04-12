//following lines of code switch the login popup from Sign In to Register
$('.signup').hide();
    $('#signin,#signup').on('click', function(e) {
        $('.signin,.signup').toggle();
    });    
//following lines of code toggle the password field 
//Also display the password field conditions
let psswrd = document.getElementById('psswrd');
let psswrd2 = document.getElementById('psswrd2');
let toggleBtn = document.getElementById('toggleBtn');
let toggleBtn2 = document.getElementById('toggleBtn2');
//show and hide the password field
toggleBtn.onclick = function() {
    if(psswrd.type== 'password') {
        psswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }else{
        psswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
};
toggleBtn2.onclick = function() {
    if(psswrd2.type== 'password') {
        psswrd2.setAttribute('type', 'text');
        toggleBtn2.classList.add('hide');
    }else{
        psswrd2.setAttribute('type', 'password');
        toggleBtn2.classList.remove('hide');
    }
};

//following lines of code check the password field conditions
let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.*{8,})');

    //lowercase validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }
    //uppercase validation check
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }
    //number validation check
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }
    //specialChar validation check
    if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }
    //length validation check
    if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    }
}

//show and hide the password field
toggleBtn.onclick = function() {
    if(psswrd.type== 'password') {
        psswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }else{
        psswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
};