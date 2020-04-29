import React from "react";
import api from "../../Services/api";
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"



class ListUser extends React.Component {

    constructor() {
        super();
        this.state = { group1: "", group2: "", group3: "", group4: "" }
    }


    componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        const currentUser = localStorage.getItem("user");

        if (!currentUser) {
            window.location.href = "/login"
        } else {

            const response = await api.get("/list/user", { headers: { user: currentUser } })


            let users = response.data;
            let count = 0;
            let arr1 = [], arr2 = [], arr3 = [], arr4 = []

            users.map(user => {
                count++;
                if (count === 1) {
                    arr1.push(user);
                } else if (count === 2) {
                    arr2.push(user);
                } else if (count === 3) {
                    arr3.push(user);
                } else {
                    arr4.push(user);
                    count = 0;
                }
                return users
            });

            this.setState({
                group1: arr1.join(",\n"),
                group2: arr2.join(",\n"),
                group3: arr3.join(",\n"),
                group4: arr4.join(",\n")
            });
        }
    }





    render() {
        return (
            <>
                <h1>Grupos de usuários:</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <h4>Grupo 1</h4>
                            {this.state.group1}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <h4>Grupo 2</h4>
                            {this.state.group2}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <h4>Grupo 3</h4>
                            {this.state.group3}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <h4>Grupo 4</h4>
                            {this.state.group4}
                        </div>
                    </div>

                </div>
            </>

        )
    }
}
export default ListUser;