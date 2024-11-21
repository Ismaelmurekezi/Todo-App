import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store"
import { loginUser } from "../redux/userSlice";
import { CgSpinner } from "react-icons/cg";



const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate=useNavigate()


  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password:yup.string().min(8).required()
})

  const { handleSubmit, register, formState: { errors,isSubmitting } } = useForm({
    resolver:yupResolver(schema)
  })
  
  const onSubmit =async (data:any) => {
    await dispatch(loginUser(data))
    navigate("/")
  }
    return (
      <div className="text-center">
        <div className="w-[600px] h-full py-7  m-auto  flex justify-center mt-52 shadow-xl border-[1px] border-gray-200 rounded-lg  ">
          <div className="w-full  flex flex-col items-center  justify-center ">
            <h1 className="text-xl text-primary  font-bold">
              WELCOME TO ADDTASKER
            </h1>

            <form
              action=""
              className="flex flex-col gap-3 pt-4 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
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
              <p className="text-red-600 text-left">
                {errors.password?.message}
              </p>

              <button className="w-[450px] h-11 pl-3 mt-4 bg-primary text-lg font-medium text-white rounded-lg   hover:bg-[#78a8ac]">
                {isSubmitting ? <CgSpinner /> : <span> Login</span>}
              </button>
              <p className="pr-60">
                Don't have account{" "}
                <Link to="/signup" className="text-[#598083]">
                  Register
                </Link>
              </p>
            </form>
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
