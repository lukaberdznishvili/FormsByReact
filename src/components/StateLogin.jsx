// import { useRef } from "react";
import { Link, Router } from 'react-router-dom';

import { useState } from "react";


export default function StateLogin() {

//     const email = useRef();
//     const password = useRef();

//   function handleSubmit(event){
//     event.preventDefault();
    
//     const enteredEmail = email.current.value;
//     const enteredPassword = password.current.value;
//     console.log(enteredEmail, enteredPassword);

    
    
//   };

    const [enteredValues, setEnteredValues] = useState(
        {
            email: '',
            password: '',
        }
    );

    const [didEDit, setDidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = didEDit.email && !enteredValues.email.includes("@");
 
    function handleSubmit(event){
        event.preventDefault();
    };
    function handleInputChange(identify, value){
        setEnteredValues(
            (prevValues)=>({
                ...prevValues,
                [identify]: value,
            })
        );
        setDidEdit(prevEDit => ( {
            ...prevEDit,
            [identify]:false,
        }));

    };

    function handleInputBlur(identify){
        setDidEdit(prevEDit => ({
            ...prevEDit,
            [identify] : true
        }))
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email"
                 type="email"
                 name="email"
                 onBlur={()=> handleInputBlur('email')}
                 onChange={(event) => handleInputChange('email', event.target.value)}
                 value={enteredValues.email}
                  />
                  <div className="control-error">{emailIsInvalid && <p>Please enter a valid email adress</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password"
           type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
                 value={enteredValues.password}
             />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
      <div>
        <Link  to='/SignUp'>
        <button className="button" type='click'> 
        SignUp
        </button>
        </Link>
      </div>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
