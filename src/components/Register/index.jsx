import React, { useEffect, useState } from "react"
import stylles from "./Register.module.css"

export function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емеил не может быть пустым')
    const [passwordError, setPasswordError] = useState('Емеил не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [values, setValues] = useState(false)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fon, setFon] = useState('')

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    function emailHandler(e) {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Некоректный емейл')
        } else {
            setEmailError('')
        }
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
        if (!e.target.value) {
            setPasswordError('Пароль не может быть пустым')
        }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    return (
        <div className={stylles.register}>
            <form action="#">
                <h1>Регистрация</h1>
                <div className={stylles.block}>
                    {(emailDirty && emailError) && 
                        <div className={stylles.error__active} style={{color: 'red', marginBottom: '4px'}}>
                            {emailError}
                        </div>}
                    <input value={email} 
                        onBlur={(e) => blurHandler(e)} 
                        onChange={(e) => emailHandler(e)}
                        name="email" type="email" placeholder="Enter your email...">
                    </input>
                </div>
                <div className={stylles.block}>
                    {(passwordDirty && passwordError) && 
                        <div className={stylles.error__active} style={{color: 'red', marginBottom: '4px'}}>
                            {passwordError}
                        </div>}
                    <input value={password}
                        onChange={(e) => passwordHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        name="password" type="password" placeholder="Enter your password...">
                    </input>
                </div>

                <div className={stylles.block}>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name" type="name" placeholder="Enter your name...">
                    </input>
                </div>
                <div className={stylles.block}>
                    <input value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        name="surname" type="surname" placeholder="Enter your surname...">
                    </input>
                </div>
                <div className={stylles.block}>
                    <input value={fon}
                        onChange={(e) => setFon(e.target.value)}
                        name="fon" type="fon" placeholder="Enter your fon...">
                    </input>
                </div>

                <button disabled={!formValid} 
                    type="submit"
                    onClick={() => setValues(!values)}>
                    Registration
                </button>
            </form>
            <div className={stylles.user}>
                <h2>USER DATA</h2>
                <div className={stylles.user__block}>
                    <span>Email:</span>
                    {email}
                </div>
                <div className={stylles.user__block}>
                    <span>Password:</span>
                    {password}
                </div>
                <div className={stylles.user__block}>
                    <span>Name:</span>
                    {name}
                </div>
                <div className={stylles.user__block}>
                    <span>Surname:</span>
                    {surname}
                </div>
                <div className={stylles.user__block}>
                    <span>Fon:</span>
                    {fon}
                </div>
            </div>
        </div>
    )
}