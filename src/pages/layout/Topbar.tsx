import LoginTrigger from "../../components/LoginTrigger";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const TopBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(
        `currentScrollY: ${currentScrollY}, lastScrollY: ${lastScrollY}`
      );

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        console.log("should be visible");
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        console.log("should not be visible");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between bg-white px-6 py-4 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
