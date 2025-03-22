let characters = "A1B2C3D4E5F6G7H8I9J0K!L@M#N%O^P&Q*R_S-T:U'V,W.X[Y]Z|";
let password = "";
let copy = document.getElementById("getPassword");

function display(password){
    const inputs = document.getElementsByTagName('input')
    const InputList = Array.from(inputs);
    
    InputList.forEach((inputfield,index)=>{
        inputfield.value = password[index]
    })
}

function generatePassword(callback) {
    let index = 0;
    password = "";
    while (index < 8) {
        password += (characters[Math.floor(Math.random() * characters.length)]);
        index++;
    }

    callback(password);

    copy.textContent === "COPIED" ? copy.textContent = "COPY" : null;
}

async function copyPassword(){
    try {
        await navigator.clipboard.writeText(password);
        copy.textContent = "COPIED"
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
