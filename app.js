var usename = document.querySelector('#usename')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent,classList.add('error');
    small.innerText = message;

}
function showSuccess(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent,classList.remove('error');
    small.innerText = ' '

}

function checkEmptyError(listInput){
    let isEmptyError = false
    listInput.forEach(input => { 
        input.value = input.value.trim()

        if(input,value){( input,"khong duoc de trong ")
    }else{
        showSuccess(input)
    }
    });
    return isEmpyError
    
}

function checkEmail(){

    
}
 

form.addEventListener('submit', function(e)
     e.prevenDefault()

     let isEmptyError = checkEmptyError([usename, email, password, confirmPassword])
  )

