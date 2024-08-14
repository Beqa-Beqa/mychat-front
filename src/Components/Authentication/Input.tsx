import "./Input.css";
import { FaEnvelope } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { useState } from "react";

const Input = (props: {
  placeholder: string,
  type: "email" | "password"
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  const {placeholder, type, onChange} = props;

  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  return (
    <div style={{height: 35, maxWidth: 410}} className="w-100 d-flex justify-content-center position-relative">
      <div style={{left: 15}} className="icon-wrapper d-flex align-items-center justify-content-center position-absolute">
        {type === "email" ? <FaEnvelope /> : <TbLock />}
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
  );
}
 
export default Input;