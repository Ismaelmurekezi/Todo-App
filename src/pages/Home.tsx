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
  const user: any = localStorage.getItem("access_token");
  const [toogleDropdown, setToogleDropdown] = useState(false);
  let decoded:any = null;
  let loggedUser = null;
    let loggedUserId=null
  if (user) {
    try {
       decoded = jwtDecode(user);
      loggedUser = decoded.rest.username;
      loggedUserId = decoded.rest._id
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem("access_token");
    }
  }
 
  const logUserOut = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

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
                to={`/tasks/${loggedUserId}`}
                className="w-full flex items-center gap-2 hover:bg-gray-100  py-1 px-2"
              >
                <BsListTask color="blue" />
                <span className="">Manage Task</span>
              </Link>
              <span className="w-full flex items-center gap-2 hover:bg-gray-100 py-1 px-2 cursor-pointer">
                <TbLogout color="red" />
                <span onClick={logUserOut}>Logout</span>
              </span>
            </div>
          )}
        </div>
      ) : (
          
        <Link to="/login">
          <Button />
        </Link>
      )}
      <InputTask loggedUserId={loggedUserId} />



    </div>
  );
};

export default Home;
