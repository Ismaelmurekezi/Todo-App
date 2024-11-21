import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputTask from "../components/InputTask";
import { jwtDecode } from "jwt-decode";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";

const Home = () => {
  const user: any = localStorage.getItem("User");
  const [toogleDropdown, setToogleDropdown] = useState(false);
  let loggedUser = null;
  if (user) {
    try {
      const decoded: any = jwtDecode(user);
      loggedUser = decoded.rest.username;
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem("User"); 
    }
  }

  return (
    <div className="flex justify-center h-full relative" id="home">
      {user && loggedUser ? (
        <div className="absolute top-4 right-10">
          <span className="flex items-center  gap-3 pb-3 ">
            <FaRegUser size={30} color="grey" />
            <p className="text-lg pt-3 text-gray-600">{loggedUser}</p>
            <IoIosArrowDown
              size={30}
              className="pt-3"
              onClick={() => setToogleDropdown((prev) => !prev)}
            />
          </span>
          {toogleDropdown && (
            <div className="bg-white border-2 border-gray-300 rounded-md ">
              <Link
                to="/tasks"
                className="w-full flex items-center gap-2 hover:bg-gray-100  py-1 px-2"
              >
                <BsListTask color="blue" />
                <span>Manage Task</span>
              </Link>
              <li className="w-full flex items-center gap-2 hover:bg-gray-100 py-1 px-2">
                <TbLogout color="red" />
                <span>Logout</span>
              </li>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <Button />
        </Link>
      )}

      <InputTask />
    </div>
  );
};

export default Home;
