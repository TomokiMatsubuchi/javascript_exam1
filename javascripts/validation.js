function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function () {
        const name = forms[0].name.value;
        if (!(confirm(`${name}さん、本当に送信しますか?`))) {
            alert("キャンセルされました");
            return false;
        }
    };
};


function emailValidation(){
    const form = document.getElementById("form");
    const emailConfirmField = document.getElementById("email_confirm");
    const element = document.createElement("p");
    element.innerText = "Eメールが一致しません";
    const contentField = document.getElementById("content_field")
    element.setAttribute('id', 'alert');
    element.classList.add("alert_color");

    emailConfirmField.addEventListener('input', function(e){
        if (form.email.value !== form.email_confirm.value) {
            if (!document.getElementById('alert')){
                contentField.parentNode.insertBefore(element, contentField);
                emailConfirmField.classList.add("alert_bg");
            }
        }else{
            emailConfirmField.classList.remove("alert_bg");
            element.parentNode.removeChild(element);
        }
    });
};

window.onload = emailValidation;
