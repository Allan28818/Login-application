import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "../styles/Auth.css";



const Login = () => {  
  const history = useHistory();
  const handleSubmit = values => {
    axios.post('http://localhost:5555/login', values)
    .then(resp => {
      const { data } = resp;
      if(data) {
        const serializedData = JSON.stringify(data)
        localStorage.setItem("response", serializedData);
        history.push("/");
      }
    });
    
  };
  const schema = yup.object().shape({
    user_name: yup.string().min(3, "No mínimo 3 caracteres").required("O nome é obrigatório"),
    password: yup.string().min(6, "No minímo 6 caracteres").required("A senha é obrigatória")
  });

  return (
    <>     
      <Formik 
      initialValues = {{}} 
      onSubmit = { handleSubmit }
      validationSchema = { schema }>
      
        <Form>
          <div className = "form-wrapper login">
            <h1 
              className = "auth-title">
                Login
            </h1>
            <div 
              className = "inputs-and-icon">
              <div 
                className = "inputs-wrapper">
                  <label 
                  htmlFor = "user_name">
                    Insira o seu nome de usuário:
                  </label>
                  <Field 
                    name = "user_name"
                    autoComplete = "off"
                    value = { undefined }
                    />
                    <ErrorMessage
                    className = "error-message"
                    component = "span"
                    name = "user_name"/>
                  
                    <label 
                    htmlFor = "password">
                      Insira a sua senha:
                    </label>
                    <Field 
                    name = "password"
                    type = "password"
                    autoComplete = "off"
                    value = { undefined }
                    />
                    <ErrorMessage
                    className = "error-message"
                    component = "span"
                    name = "password"/>
                          
                  <button
                  type = "submit"
                  >LOGIN</button>
                </div>
                <div 
                className = "icon-wrapper">
              <img 
                src = "https://image.flaticon.com/icons/png/512/272/272456.png"
                alt = "login"
                className = "login-icon"
              />
            </div>
          </div>
            
        </div>          
        </Form>
      </Formik>
    </>
  )
}

export default Login;  