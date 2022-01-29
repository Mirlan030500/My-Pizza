import { useHistory } from "react-router-dom";
import css from './Admin.module.css'
import { useState } from 'react'

export default function Admin({setIsAuth}) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const [error, setError] = useState("")
    const [isDisabled,setIsDisabled] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        setIsDisabled(true)
        fetch("https://pizza-app-ulan.herokuapp.com/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: user,
                password: password
            })
        })
        .finally(()=>{
            setIsDisabled(false)
        })
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((data) => {
                console.log(data);
                if (data?.token) {
                    setIsAuth(data)
                } else {
                    setError(data.msg)
                }
            })
            .catch((error) => {
            
            })

    }

    // history.push("/dashboard")

    return <div className={css.wrapper}>

        <form onSubmit={submit} className={css.form}>

            <h2 className={css.form_title}>Authorization Admin</h2>

            <div className={css.form_group}>
                <input className={css.form_input} type="text" placeholder=" " value={user} onChange={(e) => setUser(e.target.value)} />
                <label className={css.form_label}>Login</label>
            </div>

            <div className={css.form_group}>
                <input className={css.form_input} type="password" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className={css.form_label}>Пароль</label>
            </div>
            <button disabled={isDisabled} className={css.form_btn} type="submit">Войти</button>
        </form>
        <div className="error">{Error}</div>
    </div>;
}
