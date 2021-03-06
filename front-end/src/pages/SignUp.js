import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import "../styles/Auth.css"

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    user_name: yup.string().min(3, "No minímo 3 caracteres").required("O user name é obrigatório"),
    first_name: yup.string().required("O seu primeiro nome é obrigatório"),
    last_name: yup.string().required("O seu sobrenome é obrigatório"),
    password: yup.string().min(6, "No minímo 6 caracteres").required("A senha é obrigatória")
  });

  const handleSubmit = values => {
   axios.post("http://localhost:5555/signUp", values)
    .then(resp => {
      const { data } = resp;
      if(data) {
        alert("Obrigado por se registrar, agora você já pode efetuar o seu login");
        history.push("/login");       
      }            
    });
  };

  return (
    <>      
      <Formik
      initialValues = {{}}
      validationSchema = { schema }
      onSubmit = { handleSubmit }>
        <Form>
          <div 
          className = "form-wrapper sign-up">
            <h1
            className = "auth-title sign-up-title">
              SignUp
            </h1>  
            <div
            className = "inputs-and-icon">
              <div
              className = "inputs-wrapper">
                <label 
                htmlFor = "user_name"
                className = "sign-up-label"
                >
                Insira o seu nome de usuário:
                </label>
                <Field 
                  name = "user_name"            
                  value = { undefined }
                  autoComplete = "off"
                  className = "sign-up-input"
                />            
                <ErrorMessage 
                  className = "error-message sign-up-error"
                  name = "user_name"
                  component = "span"
                />
                <label htmlFor = "first_name"
                className = "sign-up-label"
                >
                  Insira seu nome:
                </label>
                <Field 
                  name = "first_name"            
                  value = { undefined }
                  autoComplete = "off"
                  className = "sign-up-input"
                />
                <ErrorMessage 
                  className = "error-message sign-up-error"
                  name = "first_name"
                  component = "span"
                />          
                <label 
                  htmlFor = "last_name"
                  className = "sign-up-label"
                  >
                  Insira seu sobrenome:
                </label>
                <Field 
                  name = "last_name"            
                  value = { undefined }
                  autoComplete = "off"
                  className = "sign-up-input"
                />
                <ErrorMessage 
                  className = "error-message sign-up-error"
                  name = "last_name"
                  component = "span"
                />          
                <label 
                  htmlFor = "password"
                  className = "sign-up-label"
                  >
                  Insira a sua senha:
                </label>
                <Field 
                  name = "password"
                  type = "password"            
                  value = { undefined }
                  autoComplete = "off"
                  className = "sign-up-input"
                />
                <ErrorMessage 
                  className = "error-message sign-up-error"
                  name = "password"
                  component = "span"
                />          
                <button 
                className = "sign-up-button"
                type = "submit"
                >
                  Sign Up
                </button>
              </div>     
              <div className = "icon-wrapper">
                <img 
                src = "https://img.icons8.com/cotton/2x/key.png"
                alt = "sign up"
                className = "sign-up-icon"/>
              </div>         
            </div>        
            
          </div>          
        </Form>
      </Formik>
    </>
  )
}

export default SignUp;  