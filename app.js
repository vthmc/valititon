var usename = document.querySelector('#usename')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message

}
function showSuccess(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = ' '

}

function checkEmptyError(listInput){
    let isEmptyError = false ;
    listInput.forEach(input => { 
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true ;
           showError (input,'Không Được Để Trống ')
    }else{
        showSuccess(input)
    }
    });

    return isEmptyError
    
}

function checkEmailError(input){
  const regexEmail =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   input.value = input.value.trim()

   let isEmailError = !regexEmail.test(input.value)
if(regexEmail.toLocaleString(input.value)){
    showSuccess(input)
}else{
    showError (input, 'Email invalid')
}
   return isEmailError
}



function checkLengthError(input, min,max){
    input.value = input.value.trim()

    if(input.value.length < min){
    showError(input,`Phải Có Ít Nhất ${min} Ký Tự`)
    return true
}
    if(input.value.length > max){
    showError(input,`Phải Có Ít Nhất ${max} Ký Tự`)
    return true
    }
    return false
} 
function checkMatchPasswordError(passwordInput, cfpasswordInput){
    if(passwordInput.value !== cfpasswordInput.value){
        showError(cfpasswordInput, 'Mật khẩu Không Trùng Khớp')
        return  true
    }

    return false

}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([
        usename,
        email,
        password,
        confirmPassword,
        ]);
if (!isEmptyError){
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(usename, 3, 10 );
    let isPasswordLengthError = checkLengthError(password, 3, 10);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);

    if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchError);
}})
