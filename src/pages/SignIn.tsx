import { Link } from "react-router-dom";

const SignIn = () => {
    return (
      <div className="text-center">
        <div className="w-[600px] h-72 pb-5 m-auto flex justify-center mt-52 shadow-xl border-[1px] border-gray-200 rounded-lg  ">
          <div className="w-full  flex flex-col items-center  justify-center ">
            <h1 className="text-xl text-primary py-5  font-bold">
              WELCOME TO ADDTASKER
            </h1>

            <form action="" className="flex flex-col gap-3 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              />

              <button className="w-[450px] h-11 pl-3 mt-4 bg-primary text-lg font-medium text-white rounded-lg   hover:bg-[#78a8ac]">
                Login
              </button>
            </form>
            <p className="pr-60">
              Don't have account{" "}
              <Link to="/signup" className="text-[#598083]">
                Register
              </Link>
            </p>
          </div>
        </div>
        <Link to="/">
          <button className="w-[600px] h-12 pl-3 mt-20 border-2 border-primary text-lg  font-bold text-primary rounded-lg   hover:bg-[#598083] hover:text-white">
            BACK TO HOME PAGE
          </button>
        </Link>
      </div>
    );
};

export default SignIn;
