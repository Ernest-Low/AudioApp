import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", { username, password });
  };

  const handleRegister = () => {
    onClose();
    navigate("/register");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-lg transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Login
        </h2>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-transform hover:scale-105 hover:bg-blue-700"
        >
          Login
        </button>
        <div className="mt-3 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            onClick={handleRegister}
            className="ml-1 font-medium text-blue-600 hover:underline"
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
