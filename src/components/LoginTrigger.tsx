import LoginPage from "../pages/LoginPage";
import { useState } from "react";

const LoginTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-transform hover:scale-105 hover:bg-blue-700"
      >
        Login
      </button>
      <LoginPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LoginTrigger;
