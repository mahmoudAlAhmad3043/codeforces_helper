import { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import "./Login.css";



function Login() {
    // const style = document.querySelector("body").style
    // style.setProperty("--bgImage","url('img/pxfuel.jpg')");
    useEffect(() => {
      document.body.classList.add('LoginBody');
      return () => {
        document.body.classList.remove('LoginBody');
      };
    }, []);
  return (
      <div className="Login">
      <LoginForm/>
    </div>
  );
}

export default Login;
