
function openMailForm() {
    document.getElementById("mailForm").classList.toggle("show");
    document.getElementById("errorMessage").innerHTML = "";
};

function sendMail() {
    const values = new Map([
        ["name", document.getElementById("name").value],
        ["email", document.getElementById("email").value],
        ["message", document.getElementById("message").value]
    ]);
    let validateValues = validateInput(values);
    if(validateValues){
        document.getElementById("errorMessage").innerHTML = "Sent email";
        for (const key of values.keys()) {
            document.getElementById(key).value = "";
        }
    }
};

 function validateInput(values) {
    let returnValue = true;
    values.forEach(function (value, key) {
        console.log(value)
        if (value == "" || value == null) {
            document.getElementById("errorMessage").innerHTML = "Need to fill a " + key;
            returnValue = false;
        }
    });
    if(returnValue){
        returnValue = validateEmail(values.get("email"))
        if (!returnValue) { document.getElementById("errorMessage").innerHTML = "Email is incorrect "}
    }
    return returnValue;
}

function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());   
}
