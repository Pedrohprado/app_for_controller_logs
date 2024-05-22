/* eslint-disable react/prop-types */
import { HiOutlineTrash } from 'react-icons/hi';

function DeleteButton({ clickQuest, handleClick, questClick }) {
  return (
    <>
      {clickQuest ? (
        <button
          onClick={handleClick}
          className=' mt-2 flex items-center justify-center gap-2 p-2 px-3 border rounded border-red-300 text-red-500 font-medium hover:bg-red-500 hover:text-white transition hover:border-red-500'
        >
          tem certeza?
        </button>
      ) : (
        <button
          onClick={questClick}
          className=' opacity-0 translate-y-[1px] animate-animationleft mt-2 flex items-center justify-center gap-2 p-2 px-3 border rounded border-red-300 text-red-500 font-medium hover:bg-red-500 hover:text-white transition hover:border-red-500'
        >
          deletar os logs <HiOutlineTrash size={19} />
        </button>
      )}
    </>
  );
}

export default DeleteButton;
