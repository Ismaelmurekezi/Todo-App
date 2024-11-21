

const InputTask = () => {
  return (
    <div className="relative mt-20">
      <h1 className="flex justify-center text-2xl text-primary py-12 font-bold">
        ADD YOUR ACTIVITY
      </h1>
      <form action="" className="flex gap-2">
        <input
          type="text"
          placeholder="Enter the task"
          className="w-[450px] h-11 pl-3 border-2 border-gray-400 rounded-md shadow-xl "
        />
        <button className="w-36 h-11 font-normal text-lg  bg-[#9B9C53] text-white rounded-md hover:bg-[#b7b965]">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default InputTask