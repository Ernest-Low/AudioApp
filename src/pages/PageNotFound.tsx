import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      role="alert"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-red-700 text-6xl mt-4 font-extrabold" >404 Page Not Found</h1>
      <button
        className="text-blue-700 font-semibold my-8 px-2 py-1 border border-black rounded-md cursor-pointer hover:translate-y-0.5"
        onClick={() => navigate(-1)}
      >
        GO BACK
      </button>
    </div>
  );
};

export default PageNotFound;
