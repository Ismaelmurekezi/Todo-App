import TaskBox from "../components/TaskBox"


const TaskPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 h-full">
      <h1 className="text-primary font-bold text-2xl text-center pb-10">
        MANAGE TASK
      </h1>
      
      <TaskBox />
    </div>
  );
}

export default TaskPage