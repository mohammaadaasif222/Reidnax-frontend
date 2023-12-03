import { Link} from "react-router-dom";
import { useEffect} from "react";

export default function Header() {

  useEffect(() => {}, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Reid</span>
            <span className="text-slate-700">nax</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/dashboard">
            <li className="hidden sm:inline text-slate-700 hover:underline">
            Dashboard
            </li>
          </Link>
          <Link to="/">
            <li className=" text-slate-700 hover:underline cursor-pointer">
              {" "}
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
