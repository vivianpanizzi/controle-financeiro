import service from "./service";


const usuarioMock ={
    id: 1,
    nome: "fulado de tal",
    email:"fulado@exemplo.com",
    perfil:{
        id:1,
        descricao: "maneger"
    } 
};

const autenticado = {
    token:"hgsdilausdhaosd",
    usuario: usuarioMock
}

function login (email, senha){
    return new Promise((resolve, reject) => {
        if(email !== "admin@admin.com" || senha !== "123456"){
            return reject("Usuário ou senha inválidos!")
        }
        return resolve(autenticado);
    })
}

// //Método real que vai na api tentar logar o usuário
// function login (email, senha){
//     return new Promise((resolve, reject) => {
//         return service.post("/api/login",{email, senha})
//         .then(response => resolve(response))
//         .catch(error => reject(error));
//     })
// }

function obterTodos (){
    return new Promise((resolve, reject) => {
        return service.get("/api/usuarios")
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}

export default {
    login,
    obterTodos
}