import React from "react";
import Header from "../../Components/Header/Header"
import "./index.css"

export default function Home() {

    let message,user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        message = <p>Já é cadastrado? Acesse a página de <a href="/login">Login</a></p>
    } else {
        message = <p>Clique <a href="/list">aqui</a> para ver a lista de usuários em seus grupos</p>
    }

    return (
        <div id="main">
            <Header></Header>
            <div>
                <h1>Bem vindo(a)</h1>
                {message}
            </div>
        </div>
    )
}