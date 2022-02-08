import { useHistory } from "react-router-dom";
import css from './Admin.module.css'
import { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { SUCCESS_AUTHORIZATION } from "../../redux/reducers/actionTypes";
import { successAuth } from "../../redux/reducers/actions/authAction";

export default function Admin({setIsAuth}) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const [error, setError] = useState("")
    const [isDisabled,setIsDisabled] = useState(false)
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        setIsDisabled(true)
        axios.post("https://pizza-app-ulan.herokuapp.com/admin", {

                login: user,
                password: password
        
        })
        .finally(()=>{
            setIsDisabled(false)
        })
            
            .then((res) => {
               
                if (res.data?.token) {
                    //setIsAuth(res.data)
                    dispatch(successAuth(res.data))
                } else {
                    setError(res.data.msg)
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
