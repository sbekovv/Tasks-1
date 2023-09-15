import React, {useEffect, useState} from 'react';
import App from "../../App";
import styled from "styled-components";

function SignIn() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Не должен быть пустым");
    const [passwordError, setPasswordError] = useState("Не должен быть пустым");
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError])
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Пароль должен быть длиннее 3 и меньше 8")
            if (e.target.value) {
                setPasswordError("Ошибка")
            }
        } else {
            setPasswordError("")
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        if (!filter.test(e.target.value.toLowerCase())) {
            setEmailError("Некорректный email");
        } else {
            setEmailError("");
        }
    }

    const blueHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setPasswordDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }

    }

    const form = () => {
        setOpen(true)
    }

    return (
        <AppWrapper>
            {open ? <App/> : <form>
                <h1 className="signIn">Sign In</h1>
                {(emailDirty && emailError)}
                <div style={{color: 'red'}}>{emailError}</div>
                <input className="signin-input" onChange={e => emailHandler(e)} value={email} onBlue={e => blueHandler(e)} type="email"
                       placeholder="Email" />
                {(passwordDirty && passwordError)}
                <div style={{color: 'red'}}>{passwordError}</div>
                <input className="signin-input" onChange={e => passwordHandler(e)} value={password} onBlue={e => blueHandler(e)} type="password"
                       placeholder="Password"/> <br/>
                <button className="signin-btn" onClick={form} disabled={!formValid}>Enter</button>
            </form>}
        </AppWrapper>
    );
}

export default SignIn;


const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  display: flex;
  justify-content: center;

  .signIn {
    color: #AD9BE9;
    font-size: 34px;
  }

   .signin-input {
    width: 340px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    outline: none;
    border: none;
    color: #4A026B;
    font-size: 15px;
    caret-color: red;
    margin: 20px 0;
  }

  & .signin-input:active {
    border: 1px solid #3F3F3F;
  }
  
  & .signin-btn {
    color: gold;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 18px;
    width: 228px;
    height: 51px;
    border-radius: 10px;
    background: #600A87;
    border: none;
    cursor: pointer;
    margin: 20px 276px;
  }

   .signin-btn:hover {
    background: #600A87;
  }

   .signin-btn:active {
    background: #520B73;
  }

`
