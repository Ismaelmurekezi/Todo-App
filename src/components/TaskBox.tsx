import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserTasks } from "../redux/todoSlice";
import { AppDispatch, RootState } from "../redux/store";

interface InputTaskProps {
  userId: string; // Define the type of loggedUserId
}

const TaskBox: React.FC<InputTaskProps> = ({ userId }) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserTasks(userId));
  }, [dispatch, userId]);
  const { isLoading, error, tasks } = useSelector(
    (state: RootState) => state.task
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  // console.log("user", tasks?.userTask);

  return (
    <div>
      {tasks?.userTask.length == 0 ? (
        <h1>NO TASK ADDED YET</h1>
      ) : (
        tasks?.userTask.map((task: any) => (
          <div
            className="w-[500px] h-12 border-2 px-5 flex  gap-10 items-center rounded-md"
            key={task._id}
          >
            <p className="text-xl flex-1">{task.task}</p>
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
