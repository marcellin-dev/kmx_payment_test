import React, {useEffect, useState} from 'react';
import MyInputField from "../../components/tools/MyInputField";
import MyButton from "../../components/tools/MyButton";
import {store} from "../../utils/security";
import AuthApiProvider from "../../providers/core-api/ApiProvider";
import {useNavigate} from "react-router-dom";
import {showToast} from "../../utils/utils";

const Login = () => {
        const router = useNavigate()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    function changeUser(value:string){
        setUser(value)
    }function changePassword(value:string){
        setPassword(value)
    }

    async function login(e:any){
        e.preventDefault()
        setLoading(true);
            let data = {
                email: user,
                password
            }

     AuthApiProvider.login(data).then((response) => {
         showToast("success", "Connexion réussie")
            setLoading(false)
            store.set("token", response.token)
            let time = new Date().getTime() + ((response.expireIn * 1000 - 5) * 1000 * 60)
            store.set("timer", String(time));

         let timer = setInterval(()=>{
             let time = new Date().getTime()
             let timeStore = store.get("timer")
             if(timeStore && time >= Number(timeStore)){
                 store.clear()
                 router("/login")
             }
         }, 1000 * 60 * 5)

            router("/dashboard")
        })
            .catch((err) => {
                setLoading(false)
                showToast("error", "Erreur nom d'utilisateur ou mot de passe incorrect")
                console.log(err)
            })



        //     store.set("test", "test")
        // setTimeout(()=>{
        //     alert(store.get("test"))
        // },4000)
    }

useEffect(()=>{


    return ()=> clearInterval(undefined)
})
    return (
        <div className="login">

            <div className="for-register">
            <form onSubmit={login}>
                <strong>Entrez vos informations de connexion</strong>

                <MyInputField type={"text"} label={"User name"} value={user} onChange={changeUser}  />
                <MyInputField type={"password"} label="Mot de passe" value={password} onChange={changePassword}  />
                <br/> <br/>
                <MyButton label={"Connexion"} loading={loading}/>
            </form>

            </div>
        </div>
    );
};

export default Login;