import React, { useState } from "react"
import api from "../../Services/api"
import "./Login.css"


function Login() {
    const [nickName, setNickName] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        if(!nickName){
            alert("Apelido obrigatório para fazer login")
        }
        if(!password) alert("Digite sua senha antes de prosseguir")

        const response = await api.post("/login",{nickName, password})
        
        if(response.data.message === "login efetuado com sucesso!"){
            console.log(response);
            localStorage.setItem("user",JSON.stringify(response.data.user))
            window.location.href = "/";
        }else{
            alert(response.data.message)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div>
                    <label htmlFor="nickName">Apelido</label>
                    <input type="text" name="nickName" id="nickName" placeholder="Digite o apelido utilizado no cadastro" value={nickName} onChange={event => setNickName(event.target.value)} />
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" value={password} onChange={event => setPassword(event.target.value)}/>
                    <br/>
                    <a href="/register" >Não possui cadastro? Clique aqui para se cadastrar</a>
                    <br/>
                    <button className="btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;