import "./auth.css";
import { AuthInput } from "../../Components";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Login = (props: {
  setAuthPage: React.Dispatch<React.SetStateAction<"login" | "register">>
}) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const submitHnadler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className="d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="p-4 main d-flex flex-column rounded-3 w-100">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="auth-user-icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
            <FaUser className="auth-user-icon" />
          </div>
          <h1 className="fw-bold important-text">Welcome</h1>
        </div>
        <form onSubmit={submitHnadler} className="w-100 mt-3 d-flex flex-column align-items-center gap-3">
          <AuthInput
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} 
            placeholder="Email address" 
            type="email" 
          />
          <AuthInput 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPass(e.currentTarget.value)}
            placeholder="Password" 
            type="password" 
          />
          <button className="submit-button w-100 border-0 fw-bold mt-4">
            Login
          </button>
        </form>
      </div>
      <span>
        Don't have an account?
        <strong className="ms-1" onClick={() => props.setAuthPage("register")} role="button">Sign Up</strong>
      </span>
    </main>
  );
};

export default Login;