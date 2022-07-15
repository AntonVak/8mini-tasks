
// document.getElementById("obj1").innerHTML = num5;

///////////////////////////

// function Validate() {
//     if(document.myForm.Email.value == ""){
//         alert("Not Email");
//         document.myForm.Email.focus()
//         return false
//     }else if (document.myForm.Password.value == "") {
//         alert("Not Password");
//         document.myForm.Password.focus()
//         return false
//     }
//     else {
//         return true
//     }
// }


function emailValid() {
    const mail = document.getElementById("text").value;

    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.text(mail)) {
        alert("NOT EMAIL");
        return true
    }
    else{
        alert("SORRY! Incorect")
        return false
    }

}

