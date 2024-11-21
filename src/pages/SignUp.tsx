import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { registerUser } from "../redux/userSlice";
import { CgSpinner } from "react-icons/cg";


const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), " "], "Password must match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    await dispatch(registerUser(data));
    reset();
    navigate("/login");
  };
  return (
    <div className="text-center">
      <div className="w-[600px] h-full pb-5 m-auto flex justify-center mt-52 shadow-xl border-[1px] border-gray-200 rounded-lg  ">
        <div className="w-full  flex flex-col items-center  justify-center ">
          <h1 className="text-xl text-primary py-5  font-bold">
            WELCOME TO ADDTASKER
          </h1>

          <form
            action=""
            className="flex flex-col gap-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Enter your username"
              className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              {...register("username")}
            />
            <p className="text-red-600 text-left ">
              {" "}
              {errors.username?.message}
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              {...register("email")}
            />
            <p className="text-red-600 text-left">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              {...register("password")}
            />
            <p className="text-red-600 text-left">{errors.password?.message}</p>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-lg shadow-md "
              {...register("confirmPassword")}
            />
            <p className="text-red-600 text-left">
              {errors.confirmPassword?.message}
            </p>
            <button
              type="submit"
              className="w-[450px] text-center h-11  mt-4 bg-primary text-lg font-medium text-white rounded-lg   hover:bg-primaryHover"
            >
              {isSubmitting ? <CgSpinner /> : <span>Sign Up</span>}
            </button>
          </form>
          <p className="pr-64 text-lg">
            Have an account?{" "}
            <Link to="/login" className="text-[#598083] ">
              Login
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

export default SignUp;
