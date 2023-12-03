export default class Usuario {
    constructor (obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.imagem = obj.imagem;
        this.perfil = new Perfil(obj.perfil);
    }
}

class Perfil{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao;
    }
}