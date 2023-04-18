function validar(){
let username = document.querySelector("#username").value
let password = document.querySelector("#password").value

let bd =[
{email:"topillo1988@gmail.com",
password:"compaq",
username:"melquin23",
active:true
}

{
email:"pipe31@gmail.com",
password:"compaq",
username:"pipe31",
active:true
}

{
email:"juan16@gmail.com",
password:"compaq",
username:"juan16",
active:false
}
]
  for (let i of db) {
        if (user === i.email || user == i.usermane && pass === i.password) {
            if (i.active) return alert("El usuario inicio sesion correctamente");
            else return alert("El usuario esta inactivo");
        }
    }
    return alert("Usuario o contraseña incorrecta");
}
function getlogin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    if (user === "" || user === null || user === undefined) return alert("Por favor escriba un nombre de usuario");
    if (pass === "" || pass === null || pass === undefined) return alert("Por favor escriba una contraseña");
    login(user, pass);
}



// function sayhi(){
//     let username = document.querySelector("#username").value
//     let password = document.querySelector("#password").value
    
//     if(username ==="" || username.length <8) return alert("El usuario no cumple con los parametros establecidos");
    

//     console.log(username);
//     console.log(password);

//     let persona ={
//         name: "Melquin",
//         lastName: "Barrientos",
//         age: 34,
//         id: 1,
//         Tel: 3202173427

//     }
//     console.log(persona.lastName)
// }