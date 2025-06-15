
const randomPassword=[
            {
                s:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            },
            {
                 s:"abcdefghijklmnopqrstuvwxyz"
            },
            {
                s:"123456789"
            },
            {
                s:"`!@#$%^&*}]{["
            }
]
function generatePassword(){
     
   let password="";
   
   let mod=4;

   for(let i=0;i<15;i++){
       let random_index=Math.floor(Math.random()*4);

       
       let str=randomPassword[random_index].s;

       let len=str.length;


       password+=str[Math.floor(Math.random()*len)];
   }

   // now insert the password into the input field 

    const field=document.getElementById("inp");
    field.value=password;

}


// now when click the generate password password will generte 

const generate=document.getElementById('generate');

generate.addEventListener('click',generatePassword)

// when click the copy button password will be copy 


function copyPassword() {
  const passwordBox = document.getElementById("inp");
  passwordBox.select();
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => alert("Password copied!"))
    .catch((err) => console.error("Copy failed", err));
}

document.getElementById("copyBtn").addEventListener("click", copyPassword);