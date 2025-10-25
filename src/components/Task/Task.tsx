import { FiEdit2 } from "react-icons/fi";
import { container, description, title, taskHeader, editButton } from "./Task.css";

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
  onEdit?: () => void;
};

const Task = ({ taskName, taskDescription, onEdit }: TTaskProps) => {
  return (
    <div className={container}>
      <div className={taskHeader}>
        <div className={title}>{taskName}</div>
        <button
          type="button"
          className={editButton}
          onClick={(e) => { e.stopPropagation(); onEdit?.(); }}
          aria-label="편집"
          title="편집"
        >
          <FiEdit2 />
        </button>
      </div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default Task;