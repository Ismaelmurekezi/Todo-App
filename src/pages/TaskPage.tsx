import TaskBox from "../components/TaskBox"
import { jwtDecode } from "jwt-decode";


const TaskPage = () => {
    const user: any = localStorage.getItem("access_token");
     let decoded: any = null;
     let loggedUser = null;
     if (user) {
       try {
         decoded = jwtDecode(user);
         loggedUser = decoded.rest.username;
       } catch (error) {
         console.error("Error decoding token:", error);
         localStorage.removeItem("access_token");
       }
     }
     let loggedUserId: string = decoded.rest._id;
  return (
    <div className="flex flex-col  items-center mt-20  h-full">
      <h1 className="text-primary font-bold text-2xl text-center pb-5">
        MANAGE TASK
      </h1>
      <TaskBox userId={loggedUserId} />
    </div>
  );
}

export default TaskPage