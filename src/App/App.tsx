import { useState } from 'react';
import { Login, Register } from '../Containers';
import './App.css';

function App() {
  const [authPage, setAuthPage] = useState<"login" | "register">("login");

  return authPage === "login" ? <Login setAuthPage={setAuthPage} /> : <Register setAuthPage={setAuthPage} />
};

export default App;