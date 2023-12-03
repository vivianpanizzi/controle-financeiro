import Usuario from '../model/Usuario';

function salvarToken (token) {
    localStorage.setItem('token', token);
}

function obterToken(){
    localStorage.getItem('token');
}

function removerAutenticacao(){
    localStorage.clear();
}

function salvarUsuario(usuario){
    let json = JSON.stringify(usuario);
    localStorage.setItem('usuario', json)
}

function obterUsuario(){
    let json = localStorage.getItem('usuario');
    let obj = JSON.parse(json);
    return new Usuario(obj);
}

export default {
    salvarToken,
    obterToken,
    removerAutenticacao,
    salvarUsuario,
    obterUsuario
}