import "./auth.css";
import { AuthInput } from "../../Components";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Register = (props: {
  setAuthPage: React.Dispatch<React.SetStateAction<"login" | "register">>
}) => {
  // Input data holders
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passIsMatch, setPassIsMatch] = useState<boolean>(false);

  // Error states for inputs
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);

  // Handle form submit
  const submitHnadler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Regexes for email and password
    const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,19}$/igm;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    // If email or password does not match given regex, set error states accordingly
    if(!usernameRegex.test(username)) setUsernameError(true);
    if(!emailRegex.test(email)) setEmailError(true);
    if(!passRegex.test(pass)) setPassError(true);
  }

  return (
    <main className="d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="p-4 main d-flex flex-column rounded-3 w-100">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="auth-user-icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
            <FaUser className="auth-user-icon" />
          </div>
          <h1 className="fw-bold important-text">Register</h1>
        </div>
        <form onSubmit={submitHnadler} className="w-100 mt-3 d-flex flex-column align-items-center gap-3">
          <AuthInput
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              usernameError && setUsernameError(false);
              setUsername(e.currentTarget.value);
            }} 
            placeholder="Username" 
            type="text"
            error={usernameError ? "Username should be 4 - 20 characters long, no whitespace, only alphabets, digits, - or . without starting or ending with ." :""}
          />
          <AuthInput
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              emailError && setEmailError(false);
              setEmail(e.currentTarget.value);
            }} 
            placeholder="Email address" 
            type="email"
            error={emailError ? "Wrong email format" : ""}
          />
          <AuthInput 
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              passError && setPassError(false);
              setPass(e.currentTarget.value);
            }}
            placeholder="Password" 
            type="password"
            error={passError ? "Password must contain at least 8 characters, one uppercase, one digit and one special !" : ""}
          />
          <AuthInput 
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const val = e.currentTarget.value;
              if(val === pass) setPassIsMatch(true);
              else if (val !== pass && passIsMatch) setPassIsMatch(false);
            }}
            placeholder="Confirm Password" 
            type="password"
            error={!passIsMatch && pass ? "Passwords do not match" : ""}
          />
          <button className="submit-button w-100 border-0 fw-bold mt-4">
            Sign Up
          </button>
        </form>
      </div>
      <span>
        Already have an account?
        <strong className="ms-1" onClick={() => props.setAuthPage("login")} role="button">Log in</strong>
      </span>
    </main>
  );
};

export default Register;