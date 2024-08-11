import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

const TaskBox = () => {
  return (
    <div className="w-[500px] h-12 border-2 px-5 flex  gap-10 items-center rounded-md">
      <p className="text-xl flex-1">Doing Exercise</p>
      <div className="flex gap-4">
        <CiEdit className="text-blue-700 " size={25} />
        <BsTrash className="text-red-600" size={22} />
        <BsCheckLg color="green" size={26} />
      </div>
    </div>
  );
};

export default TaskBox;
