import LoginTrigger from "../../components/LoginTrigger";
import { useNavigate } from "react-router";
import { useState } from "react";

const TopBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <h1
        className="cursor-pointer text-2xl font-bold text-gray-800 hover:text-blue-600"
        onClick={() => navigate("/")}
      >
        AudioApp
      </h1>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => navigate("/profile")}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white transition-transform hover:scale-105 hover:bg-gray-900"
          >
            Profile
          </button>
        ) : (
          <LoginTrigger />
        )}
      </div>
    </nav>
  );
};

export default TopBar;
