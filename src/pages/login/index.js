import React, {useState} from "react";
import {Button} from "../../styles/form-styles";
import { DivPersonalizada } from "../../styles/geral-styles";
import InputText from "../../components/InputText";
import usuarioService from "../../service/usuario-service";
import storage from "../../utils/storage";
import finorg from "../../components/Images/finorg.png";

import './index.css';
import Usuario from "../../model/Usuario";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = () =>{
        //alert(`Login: ${email} - senha: ${senha}`)
    
        usuarioService.login(email,senha)
        .then(response => {
            console.log(response);
            const {token, usuario} = response;
            storage.salvarToken(token);

            storage.salvarUsuario(new Usuario(usuario))

            window.open("/", "_self");
        })
        .catch(error =>{
            console.log(error);
            alert(error)
        })
    }
    

    return (

        <DivPersonalizada 
            width="380px" 
            margin="auto" 
            border="1px solid #212121" 
            marginTop="90px"
            >

            <div className="logo">
                <img src={finorg} alt="Login"/>
            </div>

            <div className="group">
            <InputText 
                id="email" 
                text="E-mail" 
                placeholder= "exemplo@exemplo.com"
                callback= {(e) => setEmail(e.target.value)}
            ></InputText>
            </div>
            
            <div className="group">
            <InputText 
                id="senha" 
                text="Senha" 
                placeholder= "123456"
                type= "password"
                callback= {(e) => setSenha(e.target.value)}
            ></InputText>
            </div>
            

            <Button onClick={login}>Entrar</Button>

            <div className="esqueci-senha">
                <a href=" ">Esqueci minha senha</a>
            </div>
        </DivPersonalizada>

    );
}

export default Login;