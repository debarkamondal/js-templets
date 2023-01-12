let submit=document.getElementById("submit");
let passwordDisplay= document.getElementById("passwordDisplay")

class password{
    constructor(){
        this.pass=''
    }
    weak(){
        for (let i=0; i<8; i++){
            this.pass+=String.fromCharCode(Math.floor(Math.random() * 25)+65)
        }
        return this.pass;
    }
    strong(){
        for (let i=0; i<12; i++){
            this.pass+=String.fromCharCode(Math.floor(Math.random() * 61)+65)
        }
        return this.pass;
    }
    superstrong(){
        for (let i=0; i<16; i++){
            this.pass+=String.fromCharCode(Math.floor(Math.random() * 93)+33)
        }
        return this.pass;
    }
    funny(){
        return 'No fun for you'
    }
}

const display = (pass)=>{
    // passwordDisplay.innerHTML=`<h1>${pass}</h1>`;
    console.log(passwordDisplay)
}

const generatePassword = (option)=>{
    let pass = new password();
    switch(option)
    {
        case 'weak':
            display(pass.weak());
            console.log(passwordDisplay)
            break;
        case 'strong':
            console.log(pass.strong());
            break;
        case 'superstrong':
            console.log(pass.superstrong());
            break;
        case 'funny':
            console.log(pass.funny());
            break;
    }
}
submit.addEventListener("click", ()=>{
    let option=document.querySelector('input[name="strength"]:checked')
    generatePassword(option.value);
    let pass = new password();
})