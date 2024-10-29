import { useState } from 'react'
import './Login.css'

function Login(){

  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[emailError, setEmailError] = useState("")
  const[passwordError,setPasswordError]= useState("")
  const[loginSuccess, setLoginSuccess] = useState("")

    const onCheckClick = () =>{

    }

    const onButtonClick = () =>{
        setEmailError("")
        setPasswordError("")

        if(email === ""){
            setEmailError("Please enter your email")
            return
        }

        if(password === "")
        {
            setPasswordError("Please enter a password")
            return
        }
        // if(password.length<7){
        //     setPasswordError("password must be 8 character or longer")
        //     return
        // }

        // if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        //     setEmailError("please enter a valid email address")
        //     return
        // }

        const url = new URL('/api/loginVerify', window.location.origin);
        url.searchParams.append('email', email);
        url.searchParams.append('password', password);

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        }).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                if(data.token){
                    setLoginSuccess("Login Successful")
                }else{
                    setPasswordError("Invalid email or password")
                }
            }
        ).catch(
            error => {
                setPasswordError("Invalid email or password")
            }
        )
    }

    return(
        <div className='body-box'>
            <div className="login-box">
                <h2>LOGIN</h2>
                <form action="" method="">
                    <div className="user-box">
                        <input  
                            value={email}
                            placeholder='Username or Email' 
                            onChange={ev=> setEmail(ev.target.value)}
                            className={"user-box"}      
                        />  
                        <label className='errorLabel'>{emailError}</label>
                    </div>
                    <div className="user-box">
                        <input 
                            value={password}
                            placeholder='Password'
                            onChange={ev=>setPassword(ev.target.value)}
                            className={'user-box'}
                        />
                        <label className='errorLabel'>{passwordError}</label>
                    </div>
                    <input onClick={onCheckClick}
                        className = {"inputCheck"}
                        name='check'
                        id='check'
                        type="checkbox"
                        value="check"
                    />
                    <label className='checkLabel'>Remember Me</label><br></br>
                    <input onClick={onButtonClick}
                        className={"inputButton"}
                        type="button"      
                        value={"Submit"}
                    />  
                </form>
            </div>
            <div className='login-success'>
                {loginSuccess}
            </div>   
            <div className="picture-box"> </div>
        </div>       
    )
}

export default Login