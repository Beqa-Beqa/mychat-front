import "./Input.css";
import { FaEnvelope } from "react-icons/fa6";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { useState } from "react";

const Input = (props: {
  placeholder: string,
  type: "email" | "password" | "text",
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  error?: string
}) => {
  const {placeholder, type, onChange} = props;

  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  return (
    <div style={{maxWidth: 410}} className="w-100 d-flex flex-column">
      {props.error && <span className="input-error mb-1">{props.error}</span>}
      <div style={{height: 35}} className="d-flex justify-content-center position-relative">
        <div style={{left: 15}} className="icon-wrapper d-flex align-items-center justify-content-center position-absolute">
          {type === "email" ? <FaEnvelope /> : type === "password" ? <TbLock /> : type === "text" ? <FaUser /> : null}
        </div>
        <input
          onChange={onChange}
          placeholder={placeholder} 
          type={isPassVisible ? "text" : type}
          className="auth-input bg-transparent rounded-1 pb-1 px-5 w-100"
        />
        {type === "password" &&
          <div style={{right: 4}} className="icon-wrapper position-absolute d-flex align-items-center">
            {isPassVisible ?
              <FaEyeSlash role="button" onClick={() => setIsPassVisible(false)} className="hoverable" />
            :
              <FaEye role="button" onClick={() => setIsPassVisible(true)} className="hoverable" />
            }
          </div>
        }
      </div>
    </div>
  );
}
 
export default Input;