import React, { useState } from 'react';
import api from "../../Services/api";
import "bootstrap/dist/css/bootstrap.css"
import "./Register.css"

function Register() {
    const [nickName, setNickName] = useState(""),
          [fullName, setFullName] = useState(""),
          [password, setPassword] = useState("")

    async function handleSubmit(event){
        event.preventDefault();

        if(!nickName){
            alert("O apelido é obrigatório");
            return;
        }
        if(!password) {
            alert("Defina uma senha antes de prosseguir");
            return;
        }
        if(!fullName){            
            alert("O nome completo é obrigatório");
            return;
        }

        const response = await api.post("/sessions/store", {nickName,fullName, password});
        if(response.status === 200){
            localStorage.setItem("user", JSON.stringify(response.data.user));
            window.location.href = "/";
        }else{
            console.log(response.data.message);
            alert("Tivemos algum problema, tente novamente")
        }
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <h3>Cadastro</h3>
                <label htmlFor="nickName">Apelido</label> <br/>
                <input type="text" name="nickName" id="nickName" onChange={event => setNickName(event.target.value)}/><br/>
                <label htmlFor="fullName">Nome Completo</label><br/>
                <input type="text" name="fullName" id="fullName" onChange={event => setFullName(event.target.value)}/><br/>
                <label htmlFor="password">Senha</label><br/>
                <input type="password" name="password" id="password" onChange={event => setPassword(event.target.value) }/><br/>
                <button type="submit" className="botao" >Cadastrar</button>
            </form>
        </div>
    );
}


export default Register;
