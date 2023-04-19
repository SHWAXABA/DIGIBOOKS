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
const passwordInput = document.querySelector('.Pword');
const requirementList = document.querySelectorAll('.require li');
const requirements =[
    {regex: /[a-z]/,index:0}, //At least one lowercase letter
    {regex: /[A-Z]/,index:1},  //At least one uppercase letter
    {regex: /[0-9]/,index:2},   //At least one digit
    {regex: /[^A-Za-z0-9]/,index:3}, //At least one special character
    {regex: /.{8,}/,index:4},   //  A minumum of 8 characters
]
passwordInput.addEventListener("keyup",(e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        if(isValid){
            requirementItem.firstElementChild.className="fa-solid fa-check";
            requirementItem.classList.add('valid');
        }else{
            requirementItem.firstElementChild.className="fa-solid fa-circle";
            requirementItem.classList.remove('valid');
i        }
    });
});
//Code for profile box
function menuToggle() {
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active');
        }