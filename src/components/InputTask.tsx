import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";
import { AppDispatch } from "../redux/store";

interface InputTaskProps {
  loggedUserId: string ; 
}


const InputTask: React.FC<InputTaskProps> = ({ loggedUserId }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch<AppDispatch>();



  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let taskData: any = { task, user: loggedUserId };
    dispatch(addTask(taskData)); 

  };
  return (
    <div className="relative mt-20">
      <h1 className="flex justify-center text-2xl text-primary py-12 font-bold">
        ADD YOUR ACTIVITY
      </h1>
      <form action="" className="flex gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter the task"
          className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-md shadow-xl "
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="w-36 h-11 font-normal text-lg  bg-[#9B9C53] text-white rounded-md hover:bg-[#b7b965]"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default InputTask