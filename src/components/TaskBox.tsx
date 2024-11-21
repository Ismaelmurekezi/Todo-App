import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodo } from "../redux/todoSlice";
import { AppDispatch, RootState } from "../redux/store";

interface Task {
  _id: string;
  task: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const TaskBox = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  const { isLoading, error, tasks } = useSelector(
    (state: RootState) => state.task
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {tasks.map((task: any) =>
        task.tasks.map((tas: Task) => (
          <div
            className="w-[500px] h-12 border-2 px-5 flex  gap-10 items-center rounded-md"
            key={tas._id}
          >
            <p className="text-xl flex-1">{tas.task}</p>
            <div className="flex gap-4">
              <CiEdit className="text-blue-700 " size={25} />
              <BsTrash className="text-red-600" size={22} />
              <BsCheckLg color="green" size={26} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskBox;
